import styled from 'styled-components';

export const Container = styled.div`
  width: 80rem;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;

  button {
    width: 8rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }

  ul {
    display: flex;
    list-style: none;
  }

  ul li button {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 1rem;
    border: 0;
    outline: none;
    border-radius: 0.5rem;
  }

  ul li .current-page {
    background-color: transparent;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
  }
`;
