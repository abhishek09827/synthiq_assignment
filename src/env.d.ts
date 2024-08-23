export {};
declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        TWITTER_API_URL: string;
        INSTAGRAM_API_URL: string;
        API_CACHE_DURATION: string;
        API_KEY: string;

    }
  }
}