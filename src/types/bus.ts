export interface Stop {
  stopName: string;
  lat: number;
  lng: number;
  order: number;
}

export interface Route {
  routeId: string;
  routeName: string;
  district: string;
  stops: Stop[];
}

export interface District {
  districtId: string;
  districtName: string;
  centerLat: number;
  centerLng: number;
}

export interface Bus {
  busId: string;
  routeId: string;
  district: string;
  currentLat: number;
  currentLng: number;
  speedKmph: number;
  lastUpdated: number;
  currentStopIndex: number;
  progress: number; // 0-1 between current and next stop
  nextStopName: string;
  etaMinutes: number;
}

export interface BusState {
  buses: Bus[];
  selectedDistrict: string | null;
  selectedRoute: Route | null;
  selectedBus: Bus | null;
}
