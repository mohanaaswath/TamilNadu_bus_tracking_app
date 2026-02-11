import { Bus } from "@/types/bus";
import { routes } from "@/data/routes";
import { Bus as BusIcon, Clock, Gauge, Navigation, X } from "lucide-react";

interface BusInfoPanelProps {
  bus: Bus | null;
  onClose: () => void;
}

const BusInfoPanel = ({ bus, onClose }: BusInfoPanelProps) => {
  if (!bus) return null;

  const route = routes.find(
    (r) => r.routeId === bus.routeId && r.district === bus.district,
  );

  return (
    <div className="transit-panel p-4 transit-glow animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
            <BusIcon className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-card-foreground">
              {bus.busId}
            </h3>
            <p className="text-xs text-muted-foreground">Route {bus.routeId}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="h-7 w-7 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {route && (
        <p className="text-xs text-muted-foreground mb-3 font-medium">
          {route.routeName}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <InfoTile
          icon={<Navigation className="h-3.5 w-3.5" />}
          label="Next Stop"
          value={bus.nextStopName}
        />
        <InfoTile
          icon={<Clock className="h-3.5 w-3.5" />}
          label="ETA"
          value={
            bus.etaMinutes === Infinity
              ? "—"
              : `${bus.etaMinutes.toFixed(1)} min`
          }
          highlight
        />
        <InfoTile
          icon={<Gauge className="h-3.5 w-3.5" />}
          label="Speed"
          value={`${bus.speedKmph.toFixed(0)} km/h`}
        />
        <InfoTile
          icon={<Navigation className="h-3.5 w-3.5" />}
          label="Position"
          value={`${bus.currentLat.toFixed(4)}, ${bus.currentLng.toFixed(4)}`}
        />
      </div>

      {route && (
        <div className="mt-3">
          <p className="text-xs font-bold text-muted-foreground mb-1.5">
            Route Stops
          </p>
          <div className="space-y-0.5">
            {route.stops.map((stop, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-lg transition-colors ${
                  i === bus.currentStopIndex
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-muted-foreground"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full flex-shrink-0 ${i === bus.currentStopIndex ? "bg-primary" : "bg-border"}`}
                />
                {stop.stopName}
                {i === bus.currentStopIndex && (
                  <span className="ml-auto text-[10px] font-bold text-primary">
                    ● CURRENT
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function InfoTile({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="bg-muted rounded-xl p-2.5">
      <div className="flex items-center gap-1 text-muted-foreground mb-0.5">
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {label}
        </span>
      </div>
      <p
        className={`text-xs font-bold truncate ${highlight ? "text-transit-eta" : "text-card-foreground"}`}
      >
        {value}
      </p>
    </div>
  );
}

export default BusInfoPanel;
