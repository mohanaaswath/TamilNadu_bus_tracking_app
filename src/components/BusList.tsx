import { Bus } from "@/types/bus";
import { Bus as BusIcon, ArrowRight } from "lucide-react";

interface BusListProps {
  buses: Bus[];
  selectedBus: Bus | null;
  onSelectBus: (bus: Bus) => void;
}

const BusList = ({ buses, selectedBus, onSelectBus }: BusListProps) => {
  if (buses.length === 0) {
    return (
      <div className="text-center py-6">
        <BusIcon className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
        <p className="text-xs text-muted-foreground">Select a district to see active buses</p>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        Active Buses ({buses.length})
      </label>
      <div className="space-y-1 max-h-40 overflow-y-auto">
        {buses.map((bus) => (
          <button
            key={bus.busId}
            onClick={() => onSelectBus(bus)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
              selectedBus?.busId === bus.busId
                ? "bg-accent text-accent-foreground"
                : "hover:bg-muted text-card-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-transit-bus animate-pulse" />
              <span className="font-semibold text-xs">{bus.routeId}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <ArrowRight className="h-3 w-3" />
              <span className="truncate max-w-[100px]">{bus.nextStopName}</span>
              <span className="ml-1 font-medium text-transit-eta">
                {bus.etaMinutes === Infinity ? "—" : `${bus.etaMinutes.toFixed(0)}m`}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusList;
