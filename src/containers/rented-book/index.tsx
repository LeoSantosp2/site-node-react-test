import { useState, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useRouter } from 'next/navigation';

import axios from '../../services/axios';

import env from '../../config/env';

import HeaderComponent from '../../components/header';
import RegisterClientModal from '../../components/register-client-modal';

import { confirmRent } from '../../utils/confirm-rent';

import { ClientsProps } from '../../types/clients-props';
import { BookSelectedProps } from '../../types/book-selected-props';

import { Page, Main } from './styled';

export default function RentedBookPage() {
  const [q, setQ] = useState('');
  const [client, setClient] = useState<string[]>([]);
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const [newClient, setNewClient] = useState(false);
  const [rentDate, setRentDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [period, setPeriod] = useState(0);
  const [bookSelected, setBookSelected] = useState<BookSelectedProps>({
    title: env.DEFAULT_BOOK_VALUE.book.title,
    copyCode: env.DEFAULT_BOOK_VALUE.copy_code,
  });

  const { push } = useRouter();

  const fetchClients = async () => {
    try {
      const response = await axios.get(`/clients?q=${q}`);

      setClients(response.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar os clientes:', err.message);
      }
    }
  };

  const fetchBooksOnLocalStorage = () => {
    const response = localStorage.getItem('book');

    if (!response) return;

    const book = JSON.parse(response);

    setBookSelected({ title: book.title, copyCode: book.copyCode });
  };

  const backToInitial = () => {
    localStorage.removeItem('book');

    push('/inicial');
  };

  const calculePeriod = () => {
    const calculeDays =
      (Number(new Date(returnDate)) - Number(new Date(rentDate))) /
      1000 /
      60 /
      60 /
      24;

    setPeriod(calculeDays ? Math.floor(calculeDays) : 0);
  };

  const handleConfirmRent = async () => {
    const rentSuccessful = await confirmRent({
      cpf: client[1],
      copyCode: bookSelected.copyCode,
      rent_date: rentDate,
      limit_date: returnDate,
      status: 'Ativo',
    });

    if (rentSuccessful) {
      push('/inicial');
    }
  };

  useEffect(() => {
    fetchClients();
    fetchBooksOnLocalStorage();
    calculePeriod();
  }, [q, returnDate, rentDate]);

  return (
    <Page>
      <HeaderComponent />

      <Main>
        <div className="search-client-area">
          <div className="input-area">
            <label htmlFor="input-container">Buscar Cliente:</label>

            <div className="input-container" id="input-container">
              <div className="icon">
                <IoIosSearch />
              </div>

              <input
                type="text"
                placeholder="Digite nome ou CPF..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>
          </div>

          <div className="client-area">
            <label htmlFor="clients">Clientes:</label>
            <select
              id="clients"
              onChange={(e) => setClient(e.target.value.split(','))}
            >
              <option value=""></option>
              {clients.map((client) => (
                <option key={client.id} value={[client.name, client.cpf]}>
                  Nome: {client.name} CPF: {client.cpf}
                </option>
              ))}
            </select>

            <button onClick={() => setNewClient(true)}>Novo Cliente</button>
          </div>
        </div>

        <div className="book-selected-area">
          <div className="rented-book">
            <p>
              Livro Selecionado: {bookSelected.title} (código:{' '}
              {bookSelected.copyCode})
            </p>

            <div className="buttons">
              <button onClick={backToInitial}>Alterar Livro</button>
              <button>Selecionar Cópia</button>
            </div>
          </div>

          <div className="rented-date">
            <label htmlFor="rent-date">
              Data de Retirada:{' '}
              <input
                type="date"
                id="rent-date"
                value={rentDate}
                onChange={(e) => setRentDate(e.target.value)}
                required
              />
            </label>

            <label htmlFor="limit-date">
              Data de Devolução:{' '}
              <input
                type="date"
                name=""
                id="limit-date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </label>
          </div>
        </div>

        <div className="resume-area">
          <ul>
            <li>
              Cliente: {client.length > 0 ? client[0] : 'Selecione o Cliente'}
            </li>
            <li>Livro: {bookSelected.title}</li>
            <li>Cópia: {bookSelected.copyCode}</li>
            <li>Período: {period} dias restantes</li>
          </ul>
        </div>

        <div className="buttons-area">
          <button onClick={handleConfirmRent}>Confirmar Aluguel</button>
          <button onClick={backToInitial}>Cancelar</button>
        </div>
      </Main>

      {newClient && (
        <RegisterClientModal setNewClient={() => setNewClient(false)} />
      )}
    </Page>
  );
}
