import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.main`
  width: 100%;
  height: 90%;
  padding-top: 1rem;

  .search-client-area,
  .book-selected-area,
  .resume-area,
  .buttons-area {
    max-width: 120rem;
    height: 10rem;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.black};
  }

  .search-client-area .input-area {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-client-area .input-area label {
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .search-client-area .input-area .input-container {
    width: 40rem;
    height: 3rem;
    margin-left: 0.5rem;
    border-radius: 1rem;
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .search-client-area .input-area .icon {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.black};
  }

  .search-client-area .input-area input {
    width: 90%;
    height: 100%;
    padding-right: 1rem;
    border: 0;
    outline: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .search-client-area .client-area {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-client-area .client-area label {
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .search-client-area .client-area select {
    width: 35rem;
    height: 3rem;
    margin: 0 1rem;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .search-client-area .client-area button {
    width: 12rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .book-selected-area {
    display: flex;
  }

  .book-selected-area > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .book-selected-area .rented-book p {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .book-selected-area .rented-book button {
    width: 13rem;
    height: 3rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .book-selected-area .rented-date label {
    margin-bottom: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .book-selected-area .rented-date label input {
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 0;
    text-align: center;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .resume-area,
  .buttons-area {
    max-width: 40rem;
    height: 20rem;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .resume-area ul li {
    margin-bottom: 1rem;
    list-style: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .buttons-area {
    height: 7rem;
    margin-bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .buttons-area button {
    width: 15rem;
    height: 3rem;
    border-radius: 0.5rem;
    border: 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
