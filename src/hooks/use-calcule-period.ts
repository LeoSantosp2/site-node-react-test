import { useState, useEffect, useCallback } from 'react';

import { RentBookInformationProps } from '../types/rent-book-infomation-props';

export const useCalculePeriod = () => {
  const [rentalPeriod, setRentalPeriod] = useState(0);
  const [remainingPeriod, setRemainingPeriod] = useState(0);
  const [status, setStatus] = useState('');

  const calculePeriodo = useCallback(() => {
    const response = localStorage.getItem('rentBookInformation');

    const datas: RentBookInformationProps = response && JSON.parse(response);

    const rentDate = new Date(datas.rentDate);
    const limitDate = new Date(datas.limitDate);
    const currentDate = new Date().toDateString();

    const milisecondsRentalPeriod = Number(limitDate) - Number(rentDate);

    const milisecondsRemainingPeriod =
      Number(limitDate) - Number(new Date(currentDate));

    const daysRentalPeriod = milisecondsRentalPeriod / 1000 / 60 / 60 / 24;
    const daysRemainigPeriod = milisecondsRemainingPeriod / 1000 / 60 / 60 / 24;

    setRentalPeriod(daysRentalPeriod);
    setRemainingPeriod(daysRemainigPeriod);
    setStatus(datas.status);
  }, []);

  useEffect(() => {
    calculePeriodo();
  }, []);

  return {
    rentalPeriod,
    remainingPeriod,
    status,
  };
};
