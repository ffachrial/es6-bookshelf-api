import { addBookService, getAllBooksService } from '../services/services.js';

export const addBookHandler = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;

  if (name === undefined) {
    const response = h.response({
      status: 'failed',
      message: 'Failed to add book. Please fill name of book',
    });

    response.code(400);

    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'failed',
      message: 'Failed to add book. readPage cannot bigger than pageCount',
    });

    response.code(400);

    return response;
  }

  const newBook = addBookService(
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  );

  if (newBook) {
    const response = h.response({
      status: 'success',
      message: 'Successfully added book',
      data: {
        bookId: newBook.id,
      },
    });

    response.code(201);

    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Failed to add book',
  });

  response.code(500);

  return response;
};

export const getAllBooksHandler = () => {
  const books = getAllBooksService();

  return {
    status: 'success',
    data: {
      books,
    },
  };
};
