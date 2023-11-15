const books = [];

export const addBookModel = (newBook) => {
  books.push(newBook);

  const isSuccess = books.filter((book) => book.id === newBook.id).length > 0;

  if (isSuccess) {
    return newBook;
  }

  return null;
};

export const getAllBooksModel = () => books;

export const getBookByIdModel = (id) => {
  const book = books.filter((b) => b.id === id)[0];

  if (book !== undefined) {
    return book;
  }

  return null;
};
