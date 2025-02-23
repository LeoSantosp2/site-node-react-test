import { IoIosSearch } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from '../../services/axios';

import env from '../../config/env';

import HeaderComponent from '../../components/header';
import PaginationComponent from '../../components/pagination';
import DetailsRentModal from '../../components/details-rent-modal';

import { RentedBooksProps } from '../../types/rented-books-props';
import { RentBookInformationProps } from '../../types/rent-book-infomation-props';
import { ReturnBookProps } from '../../types/return-book-props';

import { Page } from './styled';

export default function RentedBooksPage() {
  const [rentedBooks, setRentedBooks] = useState<RentedBooksProps[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState('');
  const [withdrawal, setWithdrawal] = useState('');
  const [detailsRentActive, setDetailsRentActive] = useState(false);

  const { push } = useRouter();

  const fetchRentedBooks = async () => {
    try {
      const response = await axios.get(
        `/rented-books?q=${q}&page=${page}&limit=${env.LIMIT}&status=Ativo&withdrawal=${withdrawal}`,
      );

      setRentedBooks(response.data.data);
      setTotal(response.data.total);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar os livros alugados:', err.message);
      }
    }
  };

  const handleDetailsRentActiveModal = (value: RentBookInformationProps) => {
    localStorage.setItem('rentBookInformation', JSON.stringify(value));

    setDetailsRentActive(true);
  };

  const returnBook = (
    book: ReturnBookProps,
    id: string,
    value: RentBookInformationProps,
  ) => {
    localStorage.setItem('returnBook', JSON.stringify(book));
    localStorage.setItem('rentBookInformation', JSON.stringify(value));

    push(`/devolver-livro/${id}`);
  };

  useEffect(() => {
    fetchRentedBooks();
  }, [page]);

  return (
    <Page>
      <HeaderComponent />

      <div className="search-area">
        <div className="input-area">
          <input
            value={q}
            type="text"
            placeholder="Digite o título, nome do cliente ou CPF"
            onChange={(e) => setQ(e.target.value)}
          />

          <button onClick={fetchRentedBooks}>
            <IoIosSearch />
          </button>
        </div>

        <div className="filters-area">
          <label htmlFor="withdrawal">Data de Retirada:</label>
          <input
            type="date"
            name=""
            id="withdrawal"
            onChange={(e) => setWithdrawal(e.target.value)}
          />
        </div>
      </div>

      <div className="table-area">
        <table>
          <thead>
            <th>Cliente</th>
            <th>Livro</th>
            <th>Código Copia</th>
            <th>Retirada</th>
            <th>Devolutiva</th>
            <th>Status</th>
            <th>Ações</th>
          </thead>

          <tbody>
            {rentedBooks.map((rent) => (
              <tr key={rent.id}>
                <td>{rent.client.name}</td>
                <td>{rent.books_copy.book.title}</td>
                <td>{rent.books_copy.copy_code}</td>
                <td>
                  {new Date(rent.rent_date).toLocaleDateString('pt-BR', {
                    timeZone: 'UTC',
                  })}
                </td>
                <td>
                  {new Date(rent.limit_date).toLocaleDateString('pt-BR', {
                    timeZone: 'UTC',
                  })}
                </td>
                <td className="status">{rent.status}</td>
                <td className="actions">
                  <button
                    onClick={() =>
                      handleDetailsRentActiveModal({
                        rentDate: rent.rent_date,
                        limitDate: rent.limit_date,
                        status: rent.status,
                      })
                    }
                  >
                    Detalhes
                  </button>
                  <button
                    onClick={() =>
                      returnBook(
                        {
                          book: rent.books_copy.book.title,
                          copyCode: rent.books_copy.copy_code,
                          client: rent.client.name,
                          rentDate: rent.rent_date,
                          limitDate: rent.limit_date,
                        },
                        rent.id,
                        {
                          rentDate: rent.rent_date,
                          limitDate: rent.limit_date,
                          status: rent.status,
                        },
                      )
                    }
                  >
                    Devolver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-area">
        <PaginationComponent
          limit={env.LIMIT}
          page={page}
          total={total}
          setPage={setPage}
        />
      </div>

      {detailsRentActive && (
        <DetailsRentModal
          setDetailsRentActive={() => setDetailsRentActive(false)}
        />
      )}
    </Page>
  );
}
