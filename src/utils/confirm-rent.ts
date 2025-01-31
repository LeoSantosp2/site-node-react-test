import { toast } from 'react-toastify';

import axios from '../services/axios';

import { ConfirmRentProps } from '../types/confirm-rent-props';

export const confirmRent = async (
  rentData: ConfirmRentProps,
): Promise<boolean> => {
  try {
    const newRent = {
      cpf: rentData.cpf,
      copy_code: rentData.copyCode,
      rent_date: rentData.rent_date,
      limit_date: rentData.limit_date,
      status: rentData.status,
    };

    if (
      !newRent.cpf ||
      !newRent.copy_code ||
      !newRent.rent_date ||
      !newRent.limit_date
    ) {
      toast.error('Os campos não podem estar vazios.');

      return false;
    }

    const request = await axios
      .post('/rented-books', newRent)
      .catch((err) => err.response);

    if (request.status !== 201) {
      toast.error(request.data.error);

      return false;
    }

    toast.success('Livro alugado com sucesso.');

    return true;
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao confirmar o aluguel:', err.message);
    }

    return false;
  }
};
