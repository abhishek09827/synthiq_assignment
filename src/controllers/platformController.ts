import { Request, Response } from 'express';
import { getTwitterData } from '../services/twitterService';
import { getInstagramData } from '../services/instagramService';

export const getPlatformStats = async (req: Request, res: Response) => {
  const { platform } = req.params;

  try {
    let data;

    switch (platform) {
      case 'twitter':
        data = await getTwitterData();
        break;
      case 'instagram':
        data = await getInstagramData();
        break;
      default:
        return res.status(400).json({ error: 'Unsupported platform' });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: `Failed to fetch data for ${platform}` });
  }
};
