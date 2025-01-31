export type ConfirmRentProps = {
  cpf: string;
  copyCode: string;
  rent_date: string;
  limit_date: string;
  status: 'Ativo' | 'Concluído';
};
