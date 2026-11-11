import { RequestHandler } from 'express';

import { CreateBook } from '@/modules/books/helper/book.types.js';
import { createBookService } from '@/modules/books/services/book.service.js';

type BookService = ReturnType<typeof createBookService>;

export const createBookController = (bookService: BookService) => {
  const getAllBooks: RequestHandler = (_req, res) => {
    const books = bookService.getAllBooks();

    res.status(200).json({
      status: true,
      data: books,
    });
  };

  const getBookById: RequestHandler<{ id: string }> = (req, res) => {
    const book = bookService.getBookById(req.params.id);

    return res.status(200).json({
      status: true,
      data: book,
    });
  };

  const createBook: RequestHandler = (req, res) => {
    const input = req.body as CreateBook;

    const book = bookService.createBook(input);

    return res.status(201).json({
      status: true,
      data: book,
    });
  };

  return {
    createBook,
    getAllBooks,
    getBookById,
  };
};
