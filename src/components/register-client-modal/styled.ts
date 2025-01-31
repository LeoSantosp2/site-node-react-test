import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);

  .button-area {
    width: 82rem;
    height: 5rem;
    padding: 0 1rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background-color: ${({ theme }) => theme.colors.black};

    button {
      width: 12rem;
      height: 3rem;
      margin-left: 1rem;
      border-radius: 1rem;
      border: 0;
      transition: all 0.3s ease;
      cursor: pointer;
      font-size: ${({ theme }) => theme.font.sizes.text};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const FormContainer = styled.div`
  width: 82rem;
  height: 40rem;
  padding: 1rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.black};

  label {
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.sizes.text};
    color: ${({ theme }) => theme.colors.white};
  }

  label input {
    width: 18rem;
    height: 3rem;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 0;
    font-size: ${({ theme }) => theme.font.sizes.text};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  label input[type='number'] {
    width: 5rem;
  }

  label input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  label select {
    width: 6rem;
    height: 3rem;
    margin-top: 0.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
