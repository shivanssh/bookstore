import { describe, expect, jest, test, beforeEach } from '@jest/globals';

import { createBookService } from '#/modules/books/services/book.service.js';
import { BookRepository } from '#/modules/books/repositories/book.repository.js';

describe('BookServices', () => {
  let repository: jest.Mocked<BookRepository>;
  let bookService: ReturnType<typeof createBookService>;

  const mockData = {
    id: 'cf63a4c9-7fc5-4afb-8707-9ec69093f324',
    title: 'Some book title 2',
    author: 'Author 2',
    genre: 'Software Engineering',
    isbn: '2342342344',
    description: 'Book description 2',
    createdAt: new Date('2026-11-22T10:00:00.000Z'),
    updatedAt: new Date('2026-11-22T10:00:00.000Z'),
  };

  const createBook = {
    title: 'Test',
    author: 'Test Author',
    genre: 'Software Engineering',
    isbn: '9780201485677',
    description: 'Test description.',
  };

  beforeEach(() => {
    repository = {
      findAll: jest.fn<BookRepository['findAll']>(),
      findById: jest.fn<BookRepository['findById']>(),
      findByIsbn: jest.fn<BookRepository['findByIsbn']>(),
      create: jest.fn<BookRepository['create']>(),
    };

    bookService = createBookService(repository);
  });

  describe('getAllBooks', () => {
    test('Should return all books', () => {
      repository.findAll.mockReturnValue([mockData]);

      const result = bookService.getAllBooks();

      expect(result).toEqual([mockData]);
      expect(repository.findAll).toHaveBeenCalledTimes(1);
    });

    test('Should return empty array if no books exists', () => {
      repository.findAll.mockReturnValue([]);

      const result = bookService.getAllBooks();

      expect([]).toEqual(result);
    });
  });

  describe('getBookById', () => {
    test('should return book when id exists', () => {
      repository.findById.mockReturnValue(mockData);

      const result = bookService.getBookById(mockData.id);

      expect(result).toEqual(mockData);
      expect(repository.findById).toHaveBeenCalledTimes(1); //can add more but skipping it for now
    });
  });

  describe('createBook', () => {
    test('Should create book successfully', () => {
      repository.findByIsbn.mockReturnValue(null);
      repository.create.mockReturnValue(mockData);

      const result = bookService.createBook(createBook);

      expect(result).toBe(mockData);
    });
  });
});
