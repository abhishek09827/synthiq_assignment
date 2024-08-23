import dotenv from 'dotenv';

dotenv.config();
export const config = {
    port: process.env.PORT,
    twitterApiUrl: process.env.TWITTER_API_URL,
    instagramApiUrl: process.env.INSTAGRAM_API_URL,
    apiCacheDuration: process.env.API_CACHE_DURATION,
    apiKey: process.env.API_KEY
  };
  