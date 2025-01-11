import { Book } from './books-props';

export type DetailsBooksModalProps = {
  onClose: () => void;
  book: Book;
};
