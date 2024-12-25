import { Page, Modal, Container } from './styled';

export default function LoginPage() {
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
                <input type="email" name="email" className="input-email" />
              </label>

              <label htmlFor="">
                Senha
                <input
                  type="password"
                  name="password"
                  className="input-password"
                />
              </label>
            </form>
          </main>

          <footer>
            <button>Login</button>
          </footer>
        </Container>
      </Modal>
    </Page>
  );
}
