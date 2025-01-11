import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.header`
  width: 100%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.black};

  .header-container {
    max-width: 120rem;
    height: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-container h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.sizes.title};
    color: ${({ theme }) => theme.colors.white};
  }

  .header-container .logo {
    font-weight: 800;
  }

  .header-container .menu {
    position: relative;
  }

  .header-container .menu button {
    height: 3rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
  }

  .header-container .menu button .perfil {
    margin-right: 0.5rem;
  }

  .header-container .menu button .arrow-down {
    margin-left: 0.5rem;
  }

  .header-container .menu .options {
    width: 16rem;
    margin: 1rem auto 0 auto;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .header-container .menu .options a {
    padding: 1rem;
    transition: all 0.3s ease;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.black};

    &:nth-child(1) {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }

    &:last-child {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }

  .header-container .menu .options a:hover {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Main = styled.main`
  width: 100%;
  height: 90%;
  padding-top: 2rem;

  .search-area {
    max-width: 120rem;
    height: 10rem;
    margin: auto;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.black};
  }

  .search-area .input-area,
  .search-area .filters-area {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-area .input-area input {
    width: 80rem;
    height: 3rem;
    padding: 1rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border: 0;
    outline: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .search-area .input-area button {
    width: 5rem;
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

  .books-area {
    max-width: 120rem;
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .books-area table {
    width: 80rem;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  .books-area table tr td {
    padding: 1rem;

    &:nth-child(3),
    &:last-child {
      text-align: center;
    }
  }

  .books-area table tr td button {
    width: 8rem;
    height: 2.5rem;
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
`;
