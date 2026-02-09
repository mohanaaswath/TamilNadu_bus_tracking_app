import { Bus } from "@/types/bus";
import { routes } from "@/data/routes";
import { Bus as BusIcon, Clock, Gauge, Navigation } from "lucide-react";

interface BusInfoPanelProps {
  bus: Bus | null;
  onClose: () => void;
}

const BusInfoPanel = ({ bus, onClose }: BusInfoPanelProps) => {
  if (!bus) return null;

  const route = routes.find((r) => r.routeId === bus.routeId && r.district === bus.district);

  return (
    <div className="transit-panel p-4 transit-glow">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
            <BusIcon className="h-4 w-4 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-card-foreground">{bus.busId}</h3>
            <p className="text-xs text-muted-foreground">Route {bus.routeId}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-lg leading-none">×</button>
      </div>

      {route && (
        <p className="text-xs text-muted-foreground mb-3">{route.routeName}</p>
      )}

      <div className="grid grid-cols-2 gap-2">
        <InfoTile icon={<Navigation className="h-3.5 w-3.5" />} label="Next Stop" value={bus.nextStopName} />
        <InfoTile icon={<Clock className="h-3.5 w-3.5" />} label="ETA" value={bus.etaMinutes === Infinity ? "—" : `${bus.etaMinutes.toFixed(1)} min`} />
        <InfoTile icon={<Gauge className="h-3.5 w-3.5" />} label="Speed" value={`${bus.speedKmph.toFixed(0)} km/h`} />
        <InfoTile
          icon={<Navigation className="h-3.5 w-3.5" />}
          label="Position"
          value={`${bus.currentLat.toFixed(4)}, ${bus.currentLng.toFixed(4)}`}
        />
      </div>

      {route && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-muted-foreground mb-1">Stops</p>
          <div className="space-y-1">
            {route.stops.map((stop, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-xs px-2 py-1 rounded ${
                  i === bus.currentStopIndex ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${i === bus.currentStopIndex ? "bg-primary" : "bg-border"}`} />
                {stop.stopName}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function InfoTile({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-muted rounded-md p-2">
      <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
        {icon}
        <span className="text-[10px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-xs font-semibold text-card-foreground truncate">{value}</p>
    </div>
  );
}

export default BusInfoPanel;
