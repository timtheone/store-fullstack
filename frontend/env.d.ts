/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly ENDPOINT_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
