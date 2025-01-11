export type Book = {
  id: string;
  title: string;
  author: string;
  copyCode: string;
  isbn: string;
};

export type Books = {
  id: string;
  copy_code: string;
  status: string;
  book: Book;
};
