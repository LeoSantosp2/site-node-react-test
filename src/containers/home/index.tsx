import { IoIosSearch } from 'react-icons/io';
import { useState, useEffect } from 'react';

import DetailsBookModal from '../../components/details-book-modal';
import PaginationComponent from '../../components/pagination';
import HeaderComponent from '../../components/header';

import axios from '../../services/axios';

import env from '../../config/env';

import { Books, Book } from '../../types/books-props';

import { Page, Main } from './styled';

export default function HomePage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [books, setBooks] = useState<Books[]>([]);
  const [book, setBook] = useState<Book>(env.DEFAULT_BOOK_VALUE.book);
  const [page, setPage] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `/books?page=${page}&limit=${env.LIMIT}&q=${q}&status=${status}`,
      );

      setBooks(response.data.data);
      setTotalBooks(response.data.total);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar os livros:', err.message);
      }
    }
  };

  const openModal = (id: string) => {
    const findBook = books.find((book) => book.id === id);

    if (!findBook) return;

    const newBook = {
      id: findBook.id,
      title: findBook.book.title,
      author: findBook.book.author,
      copyCode: findBook.copy_code,
      isbn: findBook.book.isbn,
    };

    localStorage.setItem('book', JSON.stringify(newBook));

    setBook(newBook);
    setModalIsOpen(true);
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  return (
    <Page>
      <HeaderComponent />

      <Main>
        <div className="search-area">
          <div className="input-area">
            <input
              type="text"
              placeholder="Digite o título, autor um ISBN do livro"
              onChange={(e) => setQ(e.target.value)}
            />

            <button onClick={fetchBooks}>
              <IoIosSearch />
            </button>
          </div>

          <div className="filters-area">
            <label htmlFor="category">Categoria:</label>
            <select name="" id="category">
              <option value=""></option>
            </select>

            <label htmlFor="availability">Disponibilidade:</label>
            <select
              name=""
              id="availability"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value=""></option>
              <option value="Disponível">Disponível</option>
              <option value="Alugado">Alugado</option>
            </select>
          </div>
        </div>

        <div className="books-area">
          <table>
            <thead>
              <th>Título</th>
              <th>Autor</th>
              <th>Disponibilidade</th>
              <th>Ações</th>
            </thead>

            <tbody>
              {books.map((value) => (
                <tr key={value.id}>
                  <td>{value.book.title}</td>
                  <td>{value.book.author}</td>
                  <td>{value.status}</td>
                  <td>
                    <button
                      className="btn-details"
                      onClick={() => openModal(value.id)}
                    >
                      Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <PaginationComponent
            limit={env.LIMIT}
            total={totalBooks}
            page={page}
            setPage={setPage}
          />
        </div>
      </Main>

      {modalIsOpen && (
        <DetailsBookModal onClose={() => setModalIsOpen(false)} book={book} />
      )}
    </Page>
  );
}
