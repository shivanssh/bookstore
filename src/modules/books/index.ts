import { createBookRouter } from '@/modules/books/routes/book.routes.js';
import { createBookService } from '@/modules/books/services/book.service.js';
import { createBookController } from '@/modules/books/controllers/book.controller.js';
import { createBookRepository } from '@/modules/books/repositories/book.repository.js';

//DI - Data flow is also same
const bookRepository = createBookRepository();

const bookService = createBookService(bookRepository);

const bookController = createBookController(bookService);

export const bookRouter = createBookRouter(bookController);
