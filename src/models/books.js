const books = [];

export const addBookModel = (newBook) => {
  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === newBook.id).length > 0;

  if (isSuccess) {
    return newBook;
  }

  return null;
};

export const getAllBooksModel = () => [
  books.map((book) => ({
    id: book.id,
    name: book.name,
    publisher: book.publisher,
  })),
];

export const getBookByIdModel = (id) => {
  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    return book;
  }

  return null;
};

export const editBookByIdModel = (
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
) => {
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books[index] = {
      ...books[index],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
      updatedAt,
    };

    return books[index];
  }

  return null;
};

export const deleteBookByIdModel = (id) => {
  const index = books.findIndex((book) => book.id === id);

  if (index !== -1) {
    books.splice(index, 1);

    return true;
  }

  return false;
};
