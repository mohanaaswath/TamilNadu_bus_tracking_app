import { useState, useEffect, useCallback, useRef } from "react";
import { Bus, Route } from "@/types/bus";
import { routes } from "@/data/routes";
import { haversineDistance, calculateETA, interpolate } from "@/utils/geo";

const UPDATE_INTERVAL = 5000; // 5 seconds
const BASE_SPEED = 30; // km/h average

function initBusesForDistrict(districtId: string): Bus[] {
  const districtRoutes = routes.filter((r) => r.district === districtId);
  return districtRoutes.map((route) => {
    const startStop = route.stops[0];
    const nextStop = route.stops[1] || route.stops[0];
    const dist = haversineDistance(startStop.lat, startStop.lng, nextStop.lat, nextStop.lng);
    return {
      busId: `BUS-${route.routeId}-001`,
      routeId: route.routeId,
      district: districtId,
      currentLat: startStop.lat,
      currentLng: startStop.lng,
      speedKmph: BASE_SPEED + Math.random() * 10 - 5,
      lastUpdated: Date.now(),
      currentStopIndex: 0,
      progress: 0,
      nextStopName: nextStop.stopName,
      etaMinutes: calculateETA(dist, BASE_SPEED),
    };
  });
}

function advanceBus(bus: Bus, route: Route): Bus {
  const stops = route.stops;
  if (stops.length < 2) return bus;

  const currentIdx = bus.currentStopIndex;
  const nextIdx = (currentIdx + 1) % stops.length;
  const currentStop = stops[currentIdx];
  const nextStop = stops[nextIdx];

  const segmentDist = haversineDistance(
    currentStop.lat, currentStop.lng,
    nextStop.lat, nextStop.lng
  );

  // How far can the bus travel in 5 seconds?
  const distPerUpdate = (bus.speedKmph / 3600) * (UPDATE_INTERVAL / 1000);
  const progressIncrement = segmentDist > 0 ? distPerUpdate / segmentDist : 1;

  let newProgress = bus.progress + progressIncrement;
  let newStopIndex = currentIdx;

  if (newProgress >= 1) {
    newProgress = 0;
    newStopIndex = nextIdx;
  }

  const fromStop = stops[newStopIndex];
  const toIdx = (newStopIndex + 1) % stops.length;
  const toStop = stops[toIdx];

  const pos = interpolate(
    fromStop.lat, fromStop.lng,
    toStop.lat, toStop.lng,
    newProgress
  );

  const remainingDist = haversineDistance(pos.lat, pos.lng, toStop.lat, toStop.lng);
  const eta = calculateETA(remainingDist, bus.speedKmph);

  return {
    ...bus,
    currentLat: pos.lat,
    currentLng: pos.lng,
    currentStopIndex: newStopIndex,
    progress: newProgress,
    nextStopName: toStop.stopName,
    etaMinutes: eta,
    lastUpdated: Date.now(),
    speedKmph: BASE_SPEED + Math.random() * 10 - 5,
  };
}

export function useBusSimulation(selectedDistrict: string | null) {
  const [buses, setBuses] = useState<Bus[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startSimulation = useCallback((districtId: string) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const initialBuses = initBusesForDistrict(districtId);
    setBuses(initialBuses);

    intervalRef.current = setInterval(() => {
      setBuses((prev) =>
        prev.map((bus) => {
          const route = routes.find((r) => r.routeId === bus.routeId);
          return route ? advanceBus(bus, route) : bus;
        })
      );
    }, UPDATE_INTERVAL);
  }, []);

  useEffect(() => {
    if (selectedDistrict) {
      startSimulation(selectedDistrict);
    } else {
      setBuses([]);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [selectedDistrict, startSimulation]);

  return buses;
}
