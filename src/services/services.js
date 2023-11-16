import { nanoid } from 'nanoid';
import {
  addBookModel,
  deleteBookByIdModel,
  editBookByIdModel,
  getAllBooksModel,
  getBookByIdModel,
} from '../models/books.js';

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

export const getAllBooksService = (
  name,
  reading,
  finished,
) => getAllBooksModel(
  name,
  reading,
  finished,
);

export const getBookByIdService = (id) => getBookByIdModel(id);

export const editBookByIdService = (
  id,
  name,
  year,
  author,
  summary,
  publisher,
  pageCount,
  readPage,
  reading,
) => {
  const updatedAt = new Date().toISOString();

  return editBookByIdModel(
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    updatedAt,
  );
};

export const deleteBookByIdService = (id) => deleteBookByIdModel(id);
