import { Router } from 'express';

import {
  validateBody,
  validateParams,
} from '#/middlewares/validate.middleware.js';
import {
  bookIdSchema,
  createBookSchema,
} from '#/modules/books/schemas/book.schema.js';
import { createBookController } from '#/modules/books/controllers/book.controller.js';

type BookController = ReturnType<typeof createBookController>;

export const createBookRouter = (bookController: BookController) => {
  const router = Router();

  router.get('/', bookController.getAllBooks);

  router.get('/:id', validateParams(bookIdSchema), bookController.getBookById);

  router.post('/', validateBody(createBookSchema), bookController.createBook);

  return router;
};
