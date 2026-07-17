export type Brand = {
  id: "alex" | "peter";
  studioName: string;
  canvasLabel: string;
  savedStudioLabel: string;
  pageTitle: string;
};

export const ALEX_BRAND: Brand = {
  id: "alex",
  studioName: "Alex's Imagination Station",
  canvasLabel: "HER CREATIVE CANVAS",
  savedStudioLabel: "Alex's Saved Studio",
  pageTitle: "Alex's Imagination Station",
};

export const PETER_BRAND: Brand = {
  id: "peter",
  studioName: "Peter's Imagination Station",
  canvasLabel: "HIS CREATIVE CANVAS",
  savedStudioLabel: "Peter's Saved Studio",
  pageTitle: "Peter's Imagination Station",
};

export function getBrandForHostname(hostname: string): Brand {
  const normalizedHostname = hostname.toLowerCase().replace(/:\d+$/, "");

  return normalizedHostname === "peter.brainstreammedia.online" || normalizedHostname === "peter.localhost"
    ? PETER_BRAND
    : ALEX_BRAND;
}
