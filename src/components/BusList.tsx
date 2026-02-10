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
      <div className="text-center py-8">
        <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-3">
          <BusIcon className="h-7 w-7 text-muted-foreground/40" />
        </div>
        <p className="text-xs text-muted-foreground font-medium">Select a district to see active buses</p>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
        🚌 Active Buses ({buses.length})
      </label>
      <div className="space-y-1 max-h-44 overflow-y-auto scrollbar-thin">
        {buses.map((bus) => (
          <button
            key={bus.busId}
            onClick={() => onSelectBus(bus)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
              selectedBus?.busId === bus.busId
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted text-card-foreground hover:shadow-sm"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className={`h-2.5 w-2.5 rounded-full ${
                selectedBus?.busId === bus.busId ? "bg-primary-foreground" : "bg-primary"
              } animate-pulse`} />
              <span className="font-bold text-xs">{bus.routeId}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] opacity-80">
              <ArrowRight className="h-3 w-3" />
              <span className="truncate max-w-[90px]">{bus.nextStopName}</span>
              <span className={`ml-1 font-bold ${
                selectedBus?.busId === bus.busId ? "text-primary-foreground" : "text-transit-eta"
              }`}>
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
