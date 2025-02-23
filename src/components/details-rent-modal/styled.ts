import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);

  .details-area {
    width: 50rem;
    height: 30rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  .details-area header {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .details-area header h2 {
    font-size: ${({ theme }) => theme.font.sizes.subTitle};
  }

  .details-area main {
    width: 100%;
    height: 70%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  .details-area main ul li {
    padding: 0.5rem 0;
    list-style: none;
    font-size: ${({ theme }) => theme.font.sizes.text};
  }

  .details-area footer {
    width: 100%;
    height: 15%;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .details-area footer button {
    width: 10rem;
    height: 3rem;
    border-radius: 1rem;
    border: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.8;
    }
  }
`;
