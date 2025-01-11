import { IoPersonSharp } from 'react-icons/io5';
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io';
import { useState, useEffect } from 'react';

import axios from '../../services/axios';

import DetailsBookModal from '../../components/details-book-modal';
import PaginationComponent from '../../components/pagination';

import env from '../../config/env';

import { Books, Book } from '../../types/books-props';

import { Page, Header, Main } from './styled';

export default function HomePage() {
  const [optionsEnabled, setOptionsEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [books, setBooks] = useState<Books[]>([]);
  const [book, setBook] = useState<Book>(env.DEFAULT_BOOK_VALUE.book);
  const [page, setPage] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `/books?page=${page}&limit=${env.LIMIT}`,
      );

      setBooks(response.data.data);
      setTotalBooks(response.data.total);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar os livros: ', err.message);
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

    setBook(newBook);

    setModalIsOpen(true);
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  return (
    <Page>
      <Header>
        <div className="header-container">
          <h1 className="logo">Livraria</h1>

          <h1>Node React Test</h1>

          <div className="menu">
            <button onClick={() => setOptionsEnabled(!optionsEnabled)}>
              <IoPersonSharp className="perfil" /> Leonardo Santos{' '}
              <IoIosArrowDown className="arrow-down" />
            </button>

            <div
              className="options"
              style={{ display: optionsEnabled ? 'flex' : 'none' }}
            >
              <a href="/clientes">Clientes</a>
              <a href="/lovros-alugados">Livros Alugados</a>
              <a href="/sair">Sair</a>
            </div>
          </div>
        </div>
      </Header>

      <Main>
        <div className="search-area">
          <div className="input-area">
            <input
              type="text"
              placeholder="Digite o título, autor um ISBN do livro"
            />

            <button>
              <IoIosSearch />
            </button>
          </div>

          <div className="filters-area">
            <label htmlFor="category">Categoria:</label>
            <select name="" id="category">
              <option value=""></option>
            </select>

            <label htmlFor="availability">Disponibilidade:</label>
            <select name="" id="availability">
              <option value=""></option>
              <option value="available">Disponível</option>
              <option value="rented">Alugado</option>
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
