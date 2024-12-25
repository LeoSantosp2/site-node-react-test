import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: slide;
  animation-duration: 1s;
  background-color: rgba(0, 0, 0, 0.5);

  @keyframes slide {
    from {
      top: -200%;
    }
    to {
      top: 0;
    }
  }
`;

export const Container = styled.div`
  width: 80rem;
  height: 40rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};

  header {
    width: 100%;
    height: 10%;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
  }

  main {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main form {
    display: flex;
    flex-direction: column;
  }

  main form label {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  main form label input {
    width: 22rem;
    height: 2.7rem;
    margin: 0.5rem 0 2rem 0;
    padding: 0.5rem;
    border-radius: 1rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  footer {
    width: 100%;
    height: 10%;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  footer button {
    width: 8rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 0;
    transition: all 0.3s ease;
    font-size: 1.6rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;
