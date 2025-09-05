// src/globals.ts
export const LOCAL_APP_API_BASE_URL = 'http://localhost:3001';
export const DEV_APP_API_BASE_URL   = 'https://dev-api-ead.glazzweb.com.br';
export const STAGE_APP_API_BASE_URL = 'https://stage-api-ead.glazzweb.com.br';
export const PROD_APP_API_BASE_URL  = 'https://api-ead.glazzweb.com.br';

// Optional: map hostnames to environments.
// Adjust patterns to your domains (examples below).
export const HOST_ENV_RULES: Array<[RegExp, 'local' | 'dev' | 'stage' | 'prod']> = [
  [/localhost|127\.0\.0\.1|::1|\.local$/i, 'local'],
  [/^dev[.-]|\.dev\./i, 'dev'],
  [/^stg[.-]|stage/i, 'stage'],
  [/.*/, 'prod'], // default/fallback
];

export const ENV_BASE_URL_MAP = {
  local: LOCAL_APP_API_BASE_URL,
  dev: DEV_APP_API_BASE_URL,
  stage: STAGE_APP_API_BASE_URL,
  prod: PROD_APP_API_BASE_URL,
} as const;
