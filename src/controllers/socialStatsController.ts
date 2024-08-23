import { Request, Response } from 'express';
import { getTwitterData } from '../services/twitterService';
import { getInstagramData } from '../services/instagramService';
import { cacheService } from '../services/cacheService';

export const getSocialStats = async (req: Request, res: Response) => {
  const cacheKey = 'socialStats';
  const cachedData = cacheService.get(cacheKey);

  if (cachedData) {
    return res.json(cachedData);
  }

  try {
    const twitterData = await getTwitterData();
    const instagramData = await getInstagramData();
    const aggregatedData = {
      twitter: twitterData,
      instagram: instagramData,
    };

    cacheService.set(cacheKey, aggregatedData);

    res.json(aggregatedData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch social stats' });
  }
};
