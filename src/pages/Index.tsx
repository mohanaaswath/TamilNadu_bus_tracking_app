import { useState, useMemo } from "react";
import { Bus, Route } from "@/types/bus";
import { districts } from "@/data/districts";
import { routes } from "@/data/routes";
import { useBusSimulation } from "@/hooks/useBusSimulation";
import Header from "@/components/Header";
import MapView from "@/components/MapView";
import DistrictSelector from "@/components/DistrictSelector";
import RouteSearch from "@/components/RouteSearch";
import BusList from "@/components/BusList";
import BusInfoPanel from "@/components/BusInfoPanel";

const TN_CENTER: [number, number] = [10.8505, 78.6];
const TN_ZOOM = 7;
const DISTRICT_ZOOM = 11;

const Index = () => {
  const [selectedDistrictId, setSelectedDistrictId] = useState<string | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  const buses = useBusSimulation(selectedDistrictId);

  const selectedDistrict = useMemo(
    () => districts.find((d) => d.districtId === selectedDistrictId) || null,
    [selectedDistrictId]
  );

  const mapCenter: [number, number] = selectedDistrict
    ? [selectedDistrict.centerLat, selectedDistrict.centerLng]
    : TN_CENTER;

  const mapZoom = selectedDistrict ? DISTRICT_ZOOM : TN_ZOOM;

  const handleDistrictChange = (districtId: string) => {
    setSelectedDistrictId(districtId || null);
    setSelectedRoute(null);
    setSelectedBus(null);
  };

  const handleSelectRoute = (route: Route | null) => {
    setSelectedRoute(route);
    setSelectedBus(null);
  };

  const handleSelectBus = (bus: Bus) => {
    setSelectedBus(bus);
    const route = routes.find((r) => r.routeId === bus.routeId && r.district === bus.district);
    if (route) setSelectedRoute(route);
  };

  const activeBus = useMemo(() => {
    if (!selectedBus) return null;
    return buses.find((b) => b.busId === selectedBus.busId) || selectedBus;
  }, [buses, selectedBus]);

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header
        busCount={buses.length}
        districtName={selectedDistrict?.districtName || null}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-80 flex-shrink-0 bg-card border-r border-border flex flex-col overflow-hidden shadow-lg">
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            <DistrictSelector
              selectedDistrict={selectedDistrictId}
              onSelect={handleDistrictChange}
            />

            <div className="h-px bg-border" />

            <RouteSearch
              selectedDistrict={selectedDistrictId}
              selectedRoute={selectedRoute}
              onSelectRoute={handleSelectRoute}
            />

            <div className="h-px bg-border" />

            <BusList
              buses={buses}
              selectedBus={activeBus}
              onSelectBus={handleSelectBus}
            />
          </div>

          {/* Bus detail panel at bottom */}
          {activeBus && (
            <div className="border-t border-border p-3 bg-card">
              <BusInfoPanel bus={activeBus} onClose={() => setSelectedBus(null)} />
            </div>
          )}
        </aside>

        {/* Map */}
        <main className="flex-1 relative">
          <MapView
            center={mapCenter}
            zoom={mapZoom}
            buses={buses}
            selectedRoute={selectedRoute}
            onSelectBus={handleSelectBus}
          />

          {/* Stats overlay */}
          <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm border border-border rounded-xl px-4 py-2.5 text-xs text-muted-foreground shadow-lg">
            <span className="font-bold text-primary">38</span> Districts •{" "}
            <span className="font-bold text-primary">{routes.length}</span> Routes •{" "}
            Updates every <span className="font-bold text-primary">2s</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
