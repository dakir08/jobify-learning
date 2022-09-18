export const getApiPath = (endpoint: string, version: "v1" | "v2" = "v1") => {
  return `/api/${version}${endpoint}`;
};
