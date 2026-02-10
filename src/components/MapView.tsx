import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { Bus, Route } from "@/types/bus";

interface MapViewProps {
  center: [number, number];
  zoom: number;
  buses: Bus[];
  selectedRoute: Route | null;
  onSelectBus: (bus: Bus) => void;
}

// RedBus-style red bus icon
const busIcon = new L.DivIcon({
  html: `<div style="background: linear-gradient(135deg, #D62828, #A31621); width: 34px; height: 34px; border-radius: 50%; border: 3px solid white; box-shadow: 0 3px 14px rgba(214,40,40,0.5); display: flex; align-items: center; justify-content: center;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
      <circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>
    </svg>
  </div>`,
  className: "bus-marker",
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});

const stopIcon = new L.DivIcon({
  html: `<div style="background: #D62828; width: 10px; height: 10px; border-radius: 50%; border: 2.5px solid white; box-shadow: 0 1px 6px rgba(214,40,40,0.35);"></div>`,
  className: "stop-marker",
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

function MapUpdater({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  const prevCenter = useRef(center);
  const prevZoom = useRef(zoom);

  useEffect(() => {
    if (prevCenter.current[0] !== center[0] || prevCenter.current[1] !== center[1] || prevZoom.current !== zoom) {
      map.flyTo(center, zoom, { duration: 1 });
      prevCenter.current = center;
      prevZoom.current = zoom;
    }
  }, [center, zoom, map]);

  return null;
}

const MapView = ({ center, zoom, buses, selectedRoute, onSelectBus }: MapViewProps) => {
  const routePolyline: [number, number][] = selectedRoute
    ? selectedRoute.stops.map((s) => [s.lat, s.lng])
    : [];

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className="h-full w-full rounded-none"
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        attribution='&copy; Google Maps'
        maxZoom={20}
      />
      <MapUpdater center={center} zoom={zoom} />

      {/* Route polyline - RedBus style dashed red */}
      {routePolyline.length > 0 && (
        <Polyline
          positions={routePolyline}
          pathOptions={{ color: "#D62828", weight: 4, opacity: 0.7, dashArray: "10 6" }}
        />
      )}

      {/* Stops */}
      {selectedRoute?.stops.map((stop, i) => (
        <Marker key={`stop-${i}`} position={[stop.lat, stop.lng]} icon={stopIcon}>
          <Popup className="custom-popup">
            <div className="text-xs font-semibold" style={{ color: '#D62828' }}>{stop.stopName}</div>
            <div className="text-[10px]" style={{ color: '#888' }}>Stop #{stop.order}</div>
          </Popup>
        </Marker>
      ))}

      {/* Buses */}
      {buses.map((bus) => (
        <Marker
          key={bus.busId}
          position={[bus.currentLat, bus.currentLng]}
          icon={busIcon}
          eventHandlers={{ click: () => onSelectBus(bus) }}
        >
          <Popup>
            <div className="text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <div className="font-bold" style={{ color: '#D62828' }}>{bus.busId}</div>
              <div style={{ color: '#555' }}>Route: {bus.routeId}</div>
              <div style={{ color: '#555' }}>Next: {bus.nextStopName}</div>
              <div className="font-semibold" style={{ color: '#2E7D32' }}>ETA: {bus.etaMinutes.toFixed(1)} min</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
