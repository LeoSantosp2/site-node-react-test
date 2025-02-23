export type RentedBooksProps = {
  id: string;
  rent_date: string;
  limit_date: string;
  status: string;
  books_copy: {
    copy_code: string;
    book: {
      title: string;
    };
  };
  client: {
    name: string;
  };
};
