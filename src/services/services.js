import { nanoid } from 'nanoid';
import { addBookModel, getAllBooksModel } from '../models/books.js';

export const addBookService = (
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  reading,
) => {
  const id = nanoid(16);
  const finished = pageCount === readPage;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;

  const newBook = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };

  return addBookModel(newBook);
};

export const getAllBooksService = () => getAllBooksModel();
