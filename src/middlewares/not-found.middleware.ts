import { Request, Response } from 'express';

export const notFoundMiddleware = (req: Request, res: Response) =>
  res.status(404).json({
    status: false,
    error: {
      code: 'ROUTE_NOT_FOUND',
      message: `Route ${req.method} ${req.originalUrl} not found`,
    },
  });
