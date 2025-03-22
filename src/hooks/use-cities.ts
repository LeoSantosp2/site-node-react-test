import { useState, useEffect, useCallback } from 'react';

import axios from '../services/axios';

import { CitiesProps } from '../types/cities-props';

export const useCities = () => {
  const [cities, setCities] = useState<CitiesProps[]>([]);

  const getCities = useCallback(async () => {
    try {
      const response = await axios.get('/reports/cities');

      setCities(response.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Erro ao buscar as cidades:', err.message);
      }
    }
  }, []);

  useEffect(() => {
    getCities();
  }, []);

  return {
    cities,
  };
};
