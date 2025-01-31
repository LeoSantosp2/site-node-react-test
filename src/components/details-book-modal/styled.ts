import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.white};

  header {
    width: 100%;
    height: 10%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${({ theme }) => theme.font.sizes.subText};
  }

  header svg {
    cursor: pointer;
  }

  main {
    width: 100%;
    height: 75%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  main ul li {
    margin: 1rem 0;
    list-style: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  footer {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  footer a {
    width: 8rem;
    height: 2.7rem;
    border-radius: 0.5rem;
    border: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;
