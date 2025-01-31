import { useState } from 'react';

import { states } from '../../utils/states';
import { registerClient } from '../../utils/register-client';

import { RegisterClientModalProps } from '../../types/register-client-modal-props';

import { Modal, FormContainer } from './styled';

export default function RegisterClientModal(props: RegisterClientModalProps) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [numberAddress, setNumberAddress] = useState('');
  const [complementAddress, setComplementAddress] = useState('');
  const [neighborhoodAddress, setNeighborhoodAddress] = useState('');
  const [cityAddress, setCityAddress] = useState('');
  const [stateAddress, setStateAddress] = useState('');
  const [zipcodeAddress, setZipcodeAddress] = useState('');

  return (
    <Modal>
      <FormContainer>
        <label htmlFor="name">
          Nome:{' '}
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="cpf">
          CPF:{' '}
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <label htmlFor="date-of-birth">
          Data de Nascimento:{' '}
          <input
            type="date"
            id="date-of-birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </label>

        <label htmlFor="street-address">
          Endereço:{' '}
          <input
            type="text"
            id="street-address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </label>

        <label htmlFor="number-address">
          Número:{' '}
          <input
            type="number"
            id="number-address"
            value={numberAddress}
            onChange={(e) => setNumberAddress(e.target.value)}
          />
        </label>

        <label htmlFor="complement-address">
          Complemento:{' '}
          <input
            type="text"
            id="complement-address"
            value={complementAddress}
            onChange={(e) => setComplementAddress(e.target.value)}
          />
        </label>

        <label htmlFor="neighborhood-address">
          Bairro:{' '}
          <input
            type="text"
            id="neighborhood-address"
            value={neighborhoodAddress}
            onChange={(e) => setNeighborhoodAddress(e.target.value)}
          />
        </label>

        <label htmlFor="city-address">
          Cidade:{' '}
          <input
            type="text"
            id="city-address"
            value={cityAddress}
            onChange={(e) => setCityAddress(e.target.value)}
          />
        </label>

        <label htmlFor="state-address">
          Estado:{' '}
          <select
            name=""
            id="sate-address"
            onChange={(e) => setStateAddress(e.target.value)}
          >
            <option value=""></option>
            {states.map((state) => (
              <option key={state.id} value={state.value}>
                {state.uf}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="zipcode-address">
          CEP:{' '}
          <input
            type="text"
            id="zipcode-address"
            value={zipcodeAddress}
            onChange={(e) => setZipcodeAddress(e.target.value)}
          />
        </label>
      </FormContainer>

      <div className="button-area">
        <button
          onClick={() =>
            registerClient({
              name,
              cpf,
              dateOfBirth,
              streetAddress,
              numberAddress,
              complementAddress,
              neighborhoodAddress,
              cityAddress,
              stateAddress,
              zipcodeAddress,
            })
          }
        >
          Cadastrar
        </button>
        <button onClick={props.setNewClient}>Cancelar</button>
      </div>
    </Modal>
  );
}
