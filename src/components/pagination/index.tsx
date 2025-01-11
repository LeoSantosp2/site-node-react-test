import env from '../../config/env';

import { PaginationComponentProps } from '../../types/pagination-component-props';

import { Container } from './styled';

export default function PaginationComponent({
  limit,
  total,
  page,
  setPage,
}: PaginationComponentProps) {
  const totalPages = Math.ceil(total / limit);
  const currentPage = Math.min(page ? page / limit + 1 : 1, totalPages);
  const firstPage = Math.max(
    Math.min(currentPage - env.MAX_LEFT, totalPages - env.MAX_ITEMS + 1),
    1,
  );
  const lastPage = Math.min(firstPage + env.MAX_ITEMS - 1, totalPages);

  const changePage = (page: number) => {
    setPage((page - 1) * limit);
  };

  return (
    <Container>
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <ul>
        {Array.from({ length: lastPage - firstPage + 1 })
          .map((_, index) => index + firstPage)
          .map((value) => (
            <li key={value}>
              <button
                className={value === currentPage ? 'current-page' : ''}
                onClick={() => changePage(value)}
              >
                {value}
              </button>
            </li>
          ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Próximo
        </button>
      </ul>
    </Container>
  );
}
