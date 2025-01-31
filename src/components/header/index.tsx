import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';

import env from '../../config/env';

import { EmployeerNameProps } from '../../types/employeer-name-props';

import { Header } from './styled';

export default function HeaderComponent() {
  const [optionsEnabled, setOptionsEnabled] = useState(false);
  const [employeerName, setEmployeerName] = useState<EmployeerNameProps>(
    env.DEFAULT_EMPLOYEER_NAME,
  );

  const fetchEmployeerName = () => {
    const response = localStorage.getItem('employeerName');
    const fullName = response
      ? JSON.parse(response)
      : env.DEFAULT_EMPLOYEER_NAME;

    setEmployeerName(fullName);
  };

  useEffect(() => {
    fetchEmployeerName();
  }, []);

  return (
    <Header>
      <div className="header-container">
        <h1 className="logo">Livraria</h1>

        <h1>Node React Test</h1>

        <div className="menu">
          <button onClick={() => setOptionsEnabled(!optionsEnabled)}>
            <IoPersonSharp className="perfil" /> {employeerName.firstName}{' '}
            {employeerName.lastName} <IoIosArrowDown className="arrow-down" />
          </button>

          <div
            className="options"
            style={{ display: optionsEnabled ? 'flex' : 'none' }}
          >
            <a href="/clientes">Clientes</a>
            <a href="/lovros-alugados">Livros Alugados</a>
            <a href="/" onClick={() => Cookies.remove('tokenAuth')}>
              Sair
            </a>
          </div>
        </div>
      </div>
    </Header>
  );
}
