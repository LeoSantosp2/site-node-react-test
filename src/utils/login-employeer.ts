import isEmail from 'validator/lib/isEmail';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import axios from '../services/axios';

type Props = {
  email: string;
  password: string;
};

export const loginEmployeer = async (employeer: Props): Promise<boolean> => {
  try {
    if (!employeer.email || !employeer.password) {
      toast.error('Os campos não podem estar vazios.');

      return false;
    }

    if (!isEmail(employeer.email)) {
      toast.error('E-mail inválido.');

      return false;
    }

    const request = await axios
      .post('/login', employeer)
      .catch((err) => err.response);

    if (request.status !== 200) {
      toast.error(request.data.error);

      return false;
    }

    toast.success('Login efetuado com sucesso.');

    Cookies.set('tokenAuth', request.data.datas.token);
    localStorage.setItem(
      'employeerName',
      JSON.stringify({
        firstName: request.data.datas.firstName,
        lastName: request.data.datas.lastName,
      }),
    );

    return true;
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao fazer o login:', err.message);
    }

    return false;
  }
};
