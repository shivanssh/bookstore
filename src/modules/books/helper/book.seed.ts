import { Book } from '@/modules/books/helper/book.types.js';

export const BOOKS_SEED_DATA: Book[] = [
  {
    id: 'cf63a4c9-7fc5-4afb-8707-9ec69093f321',
    title: 'Some book title 1',
    author: 'Author 1',
    genre: 'Software Engineering',
    isbn: '2342342344', //International Standard Book Number
    description: 'Book description 1',
    createdAt: new Date('2026-11-11T10:00:00.000Z'),
    updatedAt: new Date('2026-11-11T10:00:00.000Z'),
  },
  {
    id: 'cf63a4c9-7fc5-4afb-8707-9ec69093f324',
    title: 'Some book title 2',
    author: 'Author 2',
    genre: 'Software Engineering',
    isbn: '2342342344',
    description: 'Book description 2',
    createdAt: new Date('2026-11-22T10:00:00.000Z'),
    updatedAt: new Date('2026-11-22T10:00:00.000Z'),
  },

  {
    id: 'cf63a4c9-7fc5-4afb-8707-9ec69093f325',
    title: 'Some book title 3',
    author: 'Author 3',
    genre: 'Software Engineering',
    isbn: '3343343344',
    description: 'Book description 3',
    createdAt: new Date('2026-10-23T10:00:00.000Z'),
    updatedAt: new Date('2026-10-23T10:00:00.000Z'),
  },
];
