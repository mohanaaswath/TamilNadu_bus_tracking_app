/**
 * Haversine formula — distance in km between two lat/lng points
 */
export function haversineDistance(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/**
 * Calculate ETA in minutes given distance (km) and speed (km/h)
 */
export function calculateETA(distanceKm: number, speedKmph: number): number {
  if (speedKmph <= 0) return Infinity;
  return (distanceKm / speedKmph) * 60;
}

/**
 * Interpolate between two points based on progress (0–1)
 */
export function interpolate(
  lat1: number, lng1: number,
  lat2: number, lng2: number,
  t: number
): { lat: number; lng: number } {
  return {
    lat: lat1 + (lat2 - lat1) * t,
    lng: lng1 + (lng2 - lng1) * t,
  };
}
