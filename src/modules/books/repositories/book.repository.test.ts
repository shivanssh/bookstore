import { describe, beforeEach, test, expect } from '@jest/globals';
import { BookRepository, createBookRepository } from './book.repository.js';
import { CreateBook } from '../helper/book.types.js';

describe('BookRepository', () => {
  let repository: BookRepository;

  const newBook: CreateBook = {
    title: 'Test',
    author: 'Test Author',
    genre: 'Software Engineering',
    isbn: '9780201485677',
    description: 'Test description.',
  };

  beforeEach(() => {
    repository = createBookRepository();
  });

  describe('findAll', () => {
    test('Should return all seed books', () => {
      const books = repository.findAll();

      expect(books.length).toBeGreaterThan(0);
      expect(books[0]).toHaveProperty('id');
      expect(books[0]).toHaveProperty('title');
    });

    test('Should return a array of books', () => {
      const books = repository.findAll();

      expect(Array.isArray(books)).toBe(true);
    });
  });

  describe('findById', () => {
    test('Should return a book when id exists', () => {
      const books = repository.findAll();
      const selectedBook = books[0]!;

      const book = repository.findById(selectedBook?.id);

      expect(book).toEqual(selectedBook);
    });

    test('Should return a null when id does not exists', () => {
      const book = repository.findById('non-existing-id');

      expect(book).toBeNull();
    });
  });

  describe('findByIsbn', () => {
    test('Should return a book when isbn exists', () => {
      const books = repository.findAll();
      const selectedBook = books[0]!;

      const book = repository.findByIsbn(selectedBook?.isbn);

      expect(book).toEqual(selectedBook);
    });

    test('Should return a null when isbn does not exists', () => {
      const book = repository.findById('non-existing-isbn');

      expect(book).toBeNull();
    });
  });

  describe('create', () => {
    test('Should persist the newly created book', () => {
      const createdBook = repository.create(newBook);

      const result = repository.findById(createdBook.id);

      expect(createdBook).toEqual(result);
    });
  });
});
