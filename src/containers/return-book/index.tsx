import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import env from '../../config/env';

import axios from '../../services/axios';

import HeaderComponent from '../../components/header';

import { useCalculePeriod } from '../../hooks/use-calcule-period';

import { ReturnBookProps } from '../../types/return-book-props';

import { Page, Main } from './styled';

export default function ReturnBookPage({ id }: { id: string }) {
  const [book, setBook] = useState<ReturnBookProps>({
    book: env.DEFAULT_BOOK_VALUE.book.title,
    copyCode: env.DEFAULT_BOOK_VALUE.copy_code,
    client: '',
    rentDate: '',
    limitDate: '',
  });

  const { remainingPeriod, status } = useCalculePeriod();
  const { back, push } = useRouter();

  const fetchDatas = () => {
    const response = localStorage.getItem('returnBook');

    const datas = response ? JSON.parse(response) : {};

    setBook(datas);
  };

  const confirmDevolution = async () => {
    try {
      const rentedStatus =
        status === 'Ativo' && remainingPeriod < 0
          ? 'Atrasado'
          : status === 'Ativo' && remainingPeriod > 0
            ? 'Dentro do Prazo'
            : 'Concluído';

      const late = rentedStatus === 'Atrasado' ? 1 : 0;

      const request = await axios
        .put(`/rented-books/${id}?copyCode=${book.copyCode}`, {
          status: 'Concluído',
          late,
        })
        .catch((err) => err.response);

      if (request.status !== 200) {
        toast.error(request.data.error);

        return;
      }

      toast.success('Livro devolvido com sucesso.');

      push('/inicial');
    } catch (err) {
      if (err instanceof Error) {
        toast.error(
          'Não foi possível devolver o livro. Tente novamente, por favor!',
        );

        console.log('Error ao devolver o livro:', err.message);
      }
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <Page>
      <HeaderComponent />

      <Main>
        <div className="book-area">
          <div className="book">
            <header>
              <h1>Devolução</h1>
            </header>

            <main>
              <p>Livro: {book.book}</p>
              <p>Código da Cópia: {book.copyCode}</p>
              <p>Cliente: {book.client}</p>
              <p>
                Status:{' '}
                {status === 'Ativo' && remainingPeriod < 0
                  ? 'Atrasado'
                  : status === 'Ativo' && remainingPeriod > 0
                    ? 'Dentro do Prazo'
                    : 'Concluído'}
              </p>
              <p>
                Data de Retirada:{' '}
                {new Date(book.rentDate).toLocaleDateString('pt-BR', {
                  timeZone: 'UTC',
                })}
              </p>
              <p>
                Data de Devolução:{' '}
                {new Date(book.limitDate).toLocaleDateString('pt-BR', {
                  timeZone: 'UTC',
                })}
              </p>
            </main>

            <footer>
              <button onClick={confirmDevolution}>Confirmar Devolução</button>
              <button onClick={back}>Cancelar</button>
            </footer>
          </div>
        </div>
      </Main>
    </Page>
  );
}
