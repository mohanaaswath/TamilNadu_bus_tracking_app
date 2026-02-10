import { useState } from "react";
import { routes } from "@/data/routes";
import { Route } from "@/types/bus";
import { Search } from "lucide-react";

interface RouteSearchProps {
  selectedDistrict: string | null;
  selectedRoute: Route | null;
  onSelectRoute: (route: Route | null) => void;
}

const RouteSearch = ({ selectedDistrict, selectedRoute, onSelectRoute }: RouteSearchProps) => {
  const [query, setQuery] = useState("");

  const filteredRoutes = routes.filter((r) => {
    const matchesDistrict = !selectedDistrict || r.district === selectedDistrict;
    const matchesQuery = !query || r.routeId.toLowerCase().includes(query.toLowerCase()) || r.routeName.toLowerCase().includes(query.toLowerCase());
    return matchesDistrict && matchesQuery;
  });

  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
        🔍 Search Routes
      </label>
      <div className="relative mb-2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Route ID or name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card pl-9 pr-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:shadow-md"
        />
      </div>
      <div className="max-h-48 overflow-y-auto space-y-1 scrollbar-thin">
        {filteredRoutes.length === 0 && (
          <p className="text-xs text-muted-foreground py-3 text-center">No routes found</p>
        )}
        {filteredRoutes.map((route) => (
          <button
            key={`${route.district}-${route.routeId}`}
            onClick={() => onSelectRoute(selectedRoute?.routeId === route.routeId && selectedRoute?.district === route.district ? null : route)}
            className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all ${
              selectedRoute?.routeId === route.routeId && selectedRoute?.district === route.district
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted text-card-foreground hover:shadow-sm"
            }`}
          >
            <span className="font-bold mr-2">{route.routeId}</span>
            <span className="text-xs opacity-75">{route.routeName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RouteSearch;
