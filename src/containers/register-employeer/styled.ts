import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  .form-area {
    width: 80rem;
    height: 40rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .form-area .form {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .form-area .form label {
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .form-area .form input {
    width: 100%;
    height: 3rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .form-area .form button {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;
