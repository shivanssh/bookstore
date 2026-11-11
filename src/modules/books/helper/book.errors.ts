export class BookNotFoundError extends Error {
  readonly statusCode = 404;
  readonly code = 'BOOK_NOT_FOUND';

  constructor(id: string) {
    super(`Book with id: ${id} not found!`);

    this.name = 'BookNotFoundError';
  }
}

export class DuplicateIsbnError extends Error {
  readonly statusCode = 409;
  readonly code = 'DUPLICATE_ISBN';

  constructor(isbn: string) {
    super(`Book already exists with isbn: ${isbn}`);

    this.name = 'DuplicateIsbnError';
  }
}
