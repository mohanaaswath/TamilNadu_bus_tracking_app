import { districts } from "@/data/districts";
import { MapPin, ChevronDown } from "lucide-react";

interface DistrictSelectorProps {
  selectedDistrict: string | null;
  onSelect: (districtId: string) => void;
}

const DistrictSelector = ({ selectedDistrict, onSelect }: DistrictSelectorProps) => {
  const selected = districts.find((d) => d.districtId === selectedDistrict);

  return (
    <div className="relative">
      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
        Select District
      </label>
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
        <select
          value={selectedDistrict || ""}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full appearance-none rounded-lg border border-border bg-card pl-9 pr-10 py-2.5 text-sm font-medium text-card-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        >
          <option value="">All Tamil Nadu</option>
          {districts.map((d) => (
            <option key={d.districtId} value={d.districtId}>
              {d.districtName}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      </div>
      {selected && (
        <p className="mt-1 text-xs text-muted-foreground">
          Center: {selected.centerLat.toFixed(4)}, {selected.centerLng.toFixed(4)}
        </p>
      )}
    </div>
  );
};

export default DistrictSelector;
