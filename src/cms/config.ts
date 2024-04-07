const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const API_BASE_URL = IS_PRODUCTION
  ? process.env.PAYLOAD_SERVER_URL
  : "http://localhost:4000";

export const CACHE_OPTION = IS_PRODUCTION ? undefined : "no-store";
export const CACHE_REVALIDATION = IS_PRODUCTION ? 60 : undefined;
