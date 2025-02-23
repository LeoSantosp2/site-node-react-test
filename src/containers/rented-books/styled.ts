import styled from 'styled-components';

export const Page = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};

  .search-area {
    max-width: 120rem;
    height: 10rem;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.black};
  }

  .search-area .input-area,
  .search-area .filters-area {
    width: 70%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-area .input-area input {
    width: 95%;
    height: 3rem;
    padding: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .search-area .input-area button {
    width: 5%;
    height: 3rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  .search-area .filters-area label {
    margin-left: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  .search-area .filters-area select {
    width: 15rem;
    height: 3rem;
    margin: 0 0.5rem;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
  }

  .search-area .filters-area input[type='date'] {
    width: 15rem;
    height: 3rem;
    margin: 0 0.5rem;
    padding: 1rem;
    border: 0;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  .table-area {
    max-width: 120rem;
    margin: 0 auto;
    padding-top: 2rem;
  }

  .table-area table {
    width: 80rem;
    margin: 0 auto;
    border-collapse: collapse;
  }

  .table-area table th {
    text-align: center;
  }

  .table-area table th,
  .table-area table td {
    padding: 0.5rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  .table-area table .status {
    text-align: center;
  }

  .table-area table .actions {
    display: flex;
    flex-direction: column;
  }

  .table-area table .actions button {
    width: 8rem;
    height: 2.5rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    border: 0;
    transition: all 0.3s ease;
    font-size: ${({ theme }) => theme.font.sizes.text};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }

  .pagination-area {
    max-width: 80rem;
    margin: 0 auto;
    padding-top: 2rem;
  }
`;
