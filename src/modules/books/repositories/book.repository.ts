import { Book, CreateBook } from '#/modules/books/helper/book.types.js';
import { BOOKS_SEED_DATA } from '../helper/book.seed.js';
import { randomUUID } from 'node:crypto';

export interface BookRepository {
  findAll: () => Book[];
  create: (input: CreateBook) => Book;
  findById: (id: string) => Book | null;
  findByIsbn: (isbn: string) => Book | null;
}

export const createBookRepository = (): BookRepository => {
  const books = new Map<string, Book>();

  //We can add a check for array.length if it was not sample data
  for (const book of BOOKS_SEED_DATA) {
    books.set(book.id, { ...book });
  }

  const findAll = () => Array.from(books.values());

  const findById = (id: string) => books.get(id) ?? null;

  //For duplicate insertion
  const findByIsbn = (isbn: string) =>
    Array.from(books.values()).find((book) => book.isbn === isbn) ?? null;

  //Add book
  const create = (input: CreateBook) => {
    const date = new Date();

    const book = {
      id: randomUUID(),
      ...input,
      createdAt: date,
      updatedAt: date,
    };

    books.set(book.id, book);

    return book;
  };

  return {
    create,
    findAll,
    findById,
    findByIsbn,
  };
};
