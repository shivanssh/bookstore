import { CreateBook } from '#/modules/books/helper/book.types.js';
import { BookRepository } from '#/modules/books/repositories/book.repository.js';
import {
  BookNotFoundError,
  DuplicateIsbnError,
} from '#/modules/books/helper/book.errors.js';

export const createBookService = (bookRepository: BookRepository) => {
  const getAllBooks = () => bookRepository.findAll();

  const getBookById = (id: string) => {
    const book = bookRepository.findById(id);

    if (!book) {
      throw new BookNotFoundError(id);
    }

    return book;
  };

  const createBook = (input: CreateBook) => {
    const isDuplicate = bookRepository.findByIsbn(input.isbn);

    if (isDuplicate) {
      throw new DuplicateIsbnError(input.isbn);
    }

    return bookRepository.create(input);
  };

  return {
    createBook,
    getAllBooks,
    getBookById,
  };
};
