import { z } from 'zod';

export const createBookSchema = z.object({
  title: z.string().trim().min(3).max(200),
  author: z.string().trim().min(3).max(200),
  genre: z.string().trim().min(3).max(200),
  isbn: z
    .string()
    .trim()
    .regex(/^(?:\d{9}[\dX]|\d{13})$/, 'Please enter a valid ISBN'), //Basic validation via internet
  description: z.string().trim().max(2000).optional(),
});

export const bookIdSchema = z.object({
  id: z.uuid('Invalid book ID format'),
});

export type CreateBookRequest = z.infer<typeof createBookSchema>;
