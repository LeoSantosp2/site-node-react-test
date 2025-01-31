import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { registerEmployeer } from '../../utils/register-employeer';

import { Page, Modal } from './styled';

export default function RegisterEmployeerPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { push } = useRouter();

  const handleRegisterEmployeer = async () => {
    const registerSuccess = await registerEmployeer({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    if (registerSuccess) {
      push('/');
    }
  };

  return (
    <Page>
      <Modal>
        <div className="form-area">
          <div className="form">
            <label htmlFor="first-name">Nome</label>
            <input
              type="text"
              id="firt-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="last-name">Sobrenome</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="text"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input
              type="text"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button onClick={handleRegisterEmployeer}>Cadastrar</button>
          </div>
        </div>
      </Modal>
    </Page>
  );
}
