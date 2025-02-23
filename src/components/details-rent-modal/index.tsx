import { useCalculePeriod } from '../../hooks/use-calcule-period';

import { DetailsRentModalProps } from '../../types/details-rent-modal-props';

import { Container } from './styled';

export default function DetailsRentModal(props: DetailsRentModalProps) {
  const { rentalPeriod, remainingPeriod, status } = useCalculePeriod();

  return (
    <Container>
      <div className="details-area">
        <header>
          <h2>Detalhes</h2>
        </header>

        <main>
          <ul>
            <li>
              Período do Aluguel:{' '}
              {rentalPeriod < 0 ? 0 : Math.floor(rentalPeriod)} Dias
            </li>
            <li>
              Período Restante:{' '}
              {remainingPeriod < 0 ? 0 : Math.ceil(remainingPeriod)} Dias
            </li>
            <li>
              Status:{' '}
              {status === 'Ativo' && remainingPeriod < 0
                ? 'Atrasado'
                : status === 'Ativo' && remainingPeriod > 0
                  ? 'Dentro do Prazo'
                  : 'Concluído'}
            </li>
          </ul>
        </main>

        <footer>
          <button onClick={() => props.setDetailsRentActive()}>Fechar</button>
        </footer>
      </div>
    </Container>
  );
}
