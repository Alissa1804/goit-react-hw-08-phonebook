import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 40px;
  color: #252525;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Input = styled.input`
  width: 400px;
  font-family: inherit;
  font-weight: 400;
  font-size: 20px;
  background-color: #9bded5;
  border: 2px solid #47aba1;
  border-radius: 5px;
  color: #252525;
  padding: 5px;
  font-family: 'Readex Pro', sans-serif;
  &:focus {
    outline: 2px solid #47aba1;
  }
`;

export const Button = styled.button`
  color: #252525;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 26px;
  cursor: pointer;
  background: #47aba1;
  border-radius: 5px;
  border: 3px dotted #252525;
  padding: 5px;
  align-self: stretch;
  &:hover {
    background-color: #9bded5;
    border: 3px dotted #47aba1;
  }
`;
