import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import axios from '../../services/axios';

import HeaderComponent from '../../components/header';

import { months } from '../../utils/months';
import { years } from '../../utils/years';

import { useCities } from '../../hooks/use-cities';

import { LateBooksProps } from '../../types/late-books-props';

import { Page, Main } from './styled';

export default function ReportsPage() {
  const [lateRentPayments, setLateRentPayments] = useState<LateBooksProps>({
    month: '',
    booksTitle: [],
  });
  const [rentedBooksByCity, setRentedBooksByCity] = useState<LateBooksProps>({
    month: '',
    booksTitle: [],
  });
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [city, setCity] = useState('');

  const { cities } = useCities();

  const fetchLateRentPayments = async () => {
    try {
      const response = await axios.get(`/reports?month=${month}&year=${year}`);

      setLateRentPayments({ month, booksTitle: response.data });
    } catch (err) {
      if (err instanceof Error) {
        console.log(
          'Erro ao buscar os livros que tiveram atraso na entrega:',
          err.message,
        );
      }
    }
  };

  const fetchRentedBooksByCity = async () => {
    try {
      const response = await axios.get(
        `/reports?month=${month}&year=${year}&city=${city}`,
      );

      setRentedBooksByCity({ month, booksTitle: response.data });
    } catch (err) {
      if (err instanceof Error) {
        console.log(
          'Erro ao buscar os livros que tiveram atraso na entrega:',
          err.message,
        );
      }
    }
  };

  return (
    <Page>
      <HeaderComponent />

      <Main>
        <div className="books-late-area">
          <h1>Livros Que Mais Tiveram Atraso na Devolução</h1>

          <div className="filter-area">
            <label htmlFor="month">Mês:</label>
            <select id="month" onChange={(e) => setMonth(e.target.value)}>
              <option value=""></option>
              {months.map((month) => (
                <option key={month.id} value={month.value}>
                  {month.text}
                </option>
              ))}
            </select>

            <label htmlFor="year">Ano:</label>
            <select id="year" onChange={(e) => setYear(e.target.value)}>
              <option value=""></option>
              {years.map((year) => (
                <option key={year.id} value={year.value}>
                  {year.text}
                </option>
              ))}
            </select>

            <button onClick={fetchLateRentPayments}>
              <IoIosSearch />
            </button>
          </div>

          <table>
            <thead>
              <th>Mês</th>
              <th>1°Lugar</th>
              <th>2°Lugar</th>
              <th>3°Lugar</th>
            </thead>

            <tbody>
              <tr>
                <td>{lateRentPayments.month}</td>
                {lateRentPayments.booksTitle.map((book) => (
                  <td key={book.title}>{book.title}</td>
                ))}
              </tr>
            </tbody>
          </table>

          <h1>Livros Mais Alugados por Cidade</h1>

          <div className="filter-area">
            <label htmlFor="month">Mês:</label>
            <select id="month" onChange={(e) => setMonth(e.target.value)}>
              <option value=""></option>
              {months.map((month) => (
                <option key={month.id} value={month.value}>
                  {month.text}
                </option>
              ))}
            </select>

            <label htmlFor="year">Ano:</label>
            <select id="year" onChange={(e) => setYear(e.target.value)}>
              <option value=""></option>
              {years.map((year) => (
                <option key={year.id} value={year.value}>
                  {year.text}
                </option>
              ))}
            </select>

            <label htmlFor="cities">Cidades:</label>
            <select id="cities" onChange={(e) => setCity(e.target.value)}>
              <option value=""></option>
              {cities.map((city) => (
                <option key={city.city_address} value={city.city_address}>
                  {city.city_address}
                </option>
              ))}
            </select>

            <button onClick={fetchRentedBooksByCity}>
              <IoIosSearch />
            </button>
          </div>

          <table>
            <thead>
              <th>Mês</th>
              <th>1°Lugar</th>
              <th>2°Lugar</th>
              <th>3°Lugar</th>
            </thead>

            <tbody>
              <tr>
                <td>{rentedBooksByCity.month}</td>
                {rentedBooksByCity.booksTitle.map((book) => (
                  <td key={book.title}>{book.title}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </Main>
    </Page>
  );
}
