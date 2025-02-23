'use client';

import ReturnBookPage from '../../../containers/return-book';

export default function ReturnBook({ params }: { params: { id: string } }) {
  return <ReturnBookPage id={params.id} />;
}
