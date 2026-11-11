import { Request, Response, Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    status: true,
    data: {
      message: 'Application is healthy and Up',
      data: {
        timeStamp: new Date().toISOString(),
        uptimeInSeconds: process.uptime(),
      },
    },
  });
});

export default healthRouter;
