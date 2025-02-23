import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  width: 100%;
  height: 90vh;

  .book-area {
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-area .book {
    width: 55rem;
    height: 35rem;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  .book-area .book header {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .book-area .book main {
    width: 100%;
    height: 70%;
    padding: 0 1rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .book-area .book main p {
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  .book-area .book footer {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .book-area .book footer button {
    width: 18rem;
    height: 3rem;
    border-radius: 1rem;
    border: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};

    &:hover {
      opacity: 0.8;
    }
  }
`;
