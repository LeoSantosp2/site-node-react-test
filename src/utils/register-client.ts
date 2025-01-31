import { toast } from 'react-toastify';

import axios from '../services/axios';

import { RegisterClientProps } from '../types/register-client-props';

export const registerClient = async (client: RegisterClientProps) => {
  try {
    if (
      !client.name ||
      !client.cpf ||
      !client.dateOfBirth ||
      !client.streetAddress ||
      !client.numberAddress ||
      !client.complementAddress ||
      !client.neighborhoodAddress ||
      !client.cityAddress ||
      !client.stateAddress ||
      !client.zipcodeAddress
    ) {
      toast.error('Os campos não podem estar vazios.');

      return;
    }

    const newClient = {
      name: client.name,
      cpf: client.cpf,
      date_of_birth: client.dateOfBirth,
      street_address: client.streetAddress,
      number_address: client.numberAddress,
      complement_address: client.complementAddress,
      neighborhood_address: client.neighborhoodAddress,
      city_address: client.cityAddress,
      state_address: client.stateAddress,
      zipcode_address: client.zipcodeAddress,
    };

    const request = await axios
      .post('/clients', newClient)
      .catch((err) => err.response);

    if (request.status !== 201) {
      toast.error(request.data.error);

      return;
    }

    toast.success('Cliente cadastrado com sucesso.');
  } catch (err) {
    if (err instanceof Error) {
      console.log('Erro ao cadastrar o cliente:', err.message);
    }
  }
};
