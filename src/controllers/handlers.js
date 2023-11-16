import {
  addBookService,
  deleteBookByIdService,
  editBookByIdService,
  getAllBooksService,
  getBookByIdService,
} from '../services/services.js';

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

export const getBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const book = getBookByIdService(id);

  if (book) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'failed',
    message: 'Book is not found',
  });

  response.code(404);
  return response;
};

export const editBookByIdHandler = (request, h) => {
  const { id } = request.params;
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
      message: 'Failed to update book. Please fill name of book',
    });

    response.code(400);

    return response;
  }

  if (readPage > pageCount) {
    const response = h.response({
      status: 'failed',
      message: 'Failed to update book. readPage cannot bigger than pageCount',
    });

    response.code(400);

    return response;
  }

  const updateBook = editBookByIdService(
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  );

  if (updateBook) {
    const response = h.response({
      status: 'success',
      message: 'Book successfully updated',
    });

    response.code(200);

    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Failed to update book. Id cannot be found',
  });

  response.code(404);

  return response;
};

export const deleteBookByIdHandler = (request, h) => {
  const { id } = request.params;

  const isDeleted = deleteBookByIdService(id);

  if (isDeleted) {
    const response = h.response({
      status: 'success',
      message: 'Book successfully deleted',
    });

    response.code(200);

    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'Failed to delete book. Id cannot be found',
  });

  response.code(404);

  return response;
};
