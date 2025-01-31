import Link from 'next/link';
import { IoCloseOutline } from 'react-icons/io5';

import { DetailsBooksModalProps } from '../../types/details-books-modal-props';

import { Modal, Container } from './styled';

export default function DetailsBookModal(props: DetailsBooksModalProps) {
  return (
    <Modal>
      <Container>
        <header>
          <h1>Node React Test</h1>

          <IoCloseOutline size={24} onClick={props.onClose} />
        </header>

        <main>
          <ul>
            <li>Título: {props.book.title}</li>
            <li>Autor: {props.book.author}</li>
            <li>Código da Cópia: {props.book.copyCode}</li>
            <li>ISBN: {props.book.isbn}</li>
          </ul>
        </main>

        <footer>
          <Link href="/alugar-livro">Alugar</Link>
        </footer>
      </Container>
    </Modal>
  );
}
