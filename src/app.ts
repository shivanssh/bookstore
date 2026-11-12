import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import rootRouter from '#/routes/index.js';
import healthRouter from '#/routes/health.routes.js';
import { swaggerSpec } from '#/config/swagger.config.js';
import { errorMiddleware } from '#/middlewares/error.middleware.js';
import { notFoundMiddleware } from '#/middlewares/not-found.middleware.js';

const app = express();

//Sec. check
app.use(helmet({}));
app.use(cors()); // add UI origin ig we integrate, e.g: {origin: 'url'}

//Parser
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

//routes
app.use('/health', healthRouter);
app.use(rootRouter);

//swagger
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      tryItOutEnabled: true,
    },
  }),
);

//Error + 404 route
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
