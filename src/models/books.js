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
