import { Router } from 'express';

import { bookRouter } from '@/modules/books/index.js';

const rootRouter = Router();
const apiRouter = Router();

apiRouter.use('/books', bookRouter);

rootRouter.use('/v1/api', apiRouter); //putting static version

export default rootRouter;
