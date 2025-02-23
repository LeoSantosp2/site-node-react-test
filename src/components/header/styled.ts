import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 10vh;
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

  .header-container .logo {
    font-weight: 800;
    text-decoration: none;
    font-size: ${({ theme }) => theme.font.sizes.title};
    color: ${({ theme }) => theme.colors.white};
  }

  .header-container h1 {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.sizes.title};
    color: ${({ theme }) => theme.colors.white};
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
