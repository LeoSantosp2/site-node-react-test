import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Page, Modal, Container } from './styled';
import { loginEmployeer } from '../../utils/login-employeer';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { push } = useRouter();

  const handleLoginEmployeer = async () => {
    const loginSuccess = await loginEmployeer({ email, password });

    if (loginSuccess) {
      push('/inicial');
    }
  };

  return (
    <Page>
      <Modal>
        <Container>
          <header>
            <h1>Login</h1>
          </header>

          <main>
            <form action="">
              <label htmlFor="">
                E-mail
                <input
                  type="email"
                  name="email"
                  className="input-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label htmlFor="">
                Senha
                <input
                  type="password"
                  name="password"
                  className="input-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </form>
          </main>

          <footer>
            <button onClick={handleLoginEmployeer}>Login</button>
          </footer>
        </Container>
      </Modal>
    </Page>
  );
}
