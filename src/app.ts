import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import apiRouter from '@/routes/index.js';
import healthRouter from '@/routes/health.routes.js';
import { errorMiddleware } from '@/middlewares/error.middleware.js';
import { notFoundMiddleware } from '@/middlewares/not-found.middleware.js';

const app = express();

//Sec. check
app.use(helmet());
app.use(cors());

//Parser
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

//routes
app.use('/health', healthRouter);
app.use(apiRouter);

//Error + 404 route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
