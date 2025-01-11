export type PaginationComponentProps = {
  limit: number;
  total: number;
  page: number;
  setPage: (num: number) => void;
};
