export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateBook {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
}
