import { RequestHandler } from 'express';
import rateLimit from 'express-rate-limit';

const rateLimitHandler =
  (message: string): RequestHandler =>
  (_req, res) =>
    res.status(429).json({
      code: 'TO_MANY_REQUEST',
      message,
    });

// 100 req per 15 min
export const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  handler: rateLimitHandler('Too many requests'),
});
