import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: parseInt(process.env.API_CACHE_DURATION || '300') });

export const cacheService = {
  get: (key: string) => cache.get(key),
  set: (key: string, value: any) => cache.set(key, value),
};
