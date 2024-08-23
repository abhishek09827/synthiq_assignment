import express from 'express';
import { getSocialStats } from '../controllers/socialStatsController';
import { getPlatformStats } from '../controllers/platformController';
import { rateLimiter } from '../middlewares/rateLimitter';
import { authenticate } from '../middlewares/authenticate';

const router = express.Router();

router.use(authenticate);
// Rate limiting
router.use(rateLimiter);

router.get('/social-stats', getSocialStats);
router.get('/platform/:platform', getPlatformStats);

export default router;
