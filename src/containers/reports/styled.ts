import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  width: 100%;
  height: 90vh;
  padding-top: 2rem;

  .books-late-area {
    max-width: 120rem;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .books-late-area h1 {
    margin-bottom: 2rem;
    font-size: ${({ theme }) => theme.font.sizes.subTitle};
  }

  .books-late-area .filter-area {
    max-width: 120rem;
    height: 8rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .books-late-area .filter-area label {
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .books-late-area .filter-area select {
    width: 15rem;
    height: 3rem;
    margin: 0 1rem 0 0.5rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .books-late-area .filter-area button {
    width: 8rem;
    height: 3rem;
    border-radius: 1rem;
    border: 0;
    transition: all 0.3s ease;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.sizes.text};

    &:hover {
      opacity: 0.8;
    }
  }

  table {
    width: 80rem;
    height: 10rem;
    margin: 0 auto;
    margin-bottom: 5rem;
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }
`;
