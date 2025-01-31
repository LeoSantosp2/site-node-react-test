import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';

import axios from '../services/axios';

type Props = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerEmployeer = async (employeer: Props): Promise<boolean> => {
  try {
    if (
      !employeer.firstName ||
      !employeer.lastName ||
      !employeer.email ||
      !employeer.password ||
      !employeer.confirmPassword
    ) {
      toast.error('Os campos não pode estar vazios.');

      return false;
    }

    if (!isEmail(employeer.email)) {
      toast.error('E-mail inválido.');

      return false;
    }

    const newEmployeer = {
      first_name: employeer.firstName,
      last_name: employeer.lastName,
      email: employeer.email,
      password: employeer.password,
      confirm_password: employeer.confirmPassword,
    };

    const request = await axios
      .post('/employees', newEmployeer)
      .catch((err) => err.response);

    if (request.status !== 201) {
      toast.error(request.data.error);

      return false;
    }

    toast.success('Funcionário cadastrado com sucesso.');

    return true;
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao cadastrar o funcionário:', err.message);
    }

    return false;
  }
};
