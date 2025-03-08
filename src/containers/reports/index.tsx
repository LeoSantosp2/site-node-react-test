import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import axios from '../../services/axios';

import HeaderComponent from '../../components/header';

import { months } from '../../utils/months';
import { years } from '../../utils/years';

import { LateBooksProps } from '../../types/late-books-props';

import { Page, Main } from './styled';

export default function ReportsPage() {
  const [datas, setDatas] = useState<LateBooksProps>({
    month: '',
    booksTitle: [],
  });
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const fetchDatas = async () => {
    try {
      const response = await axios.get(`/reports?month=${month}&year=${year}`);

      setDatas({ month, booksTitle: response.data });
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
            <select
              name=""
              id="month"
              onChange={(e) => setMonth(e.target.value)}
            >
              <option value=""></option>
              {months.map((month) => (
                <option key={month.id} value={month.value}>
                  {month.text}
                </option>
              ))}
            </select>

            <label htmlFor="year">Ano:</label>
            <select name="" id="year" onChange={(e) => setYear(e.target.value)}>
              <option value=""></option>
              {years.map((year) => (
                <option key={year.id} value={year.value}>
                  {year.text}
                </option>
              ))}
            </select>

            <button onClick={fetchDatas}>
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
                <td>{datas.month}</td>
                {datas.booksTitle.map((book) => (
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
