import styled from 'styled-components';

export const Input = styled.input`
  width: 170px;
  font-family: 'Readex Pro', sans-serif;
  font-weight: 400;
  font-size: 20px;
  background-color: #9bded5;
  border: 2px solid #47aba1;
  border-radius: 5px;
  color: #252525;
  padding: 3px;
  font-family: 'Readex Pro', sans-serif;
  &:focus {
    outline: 2px solid #47aba1;
  }
`;

export const Button = styled.button`
  color: #fff;
  font-family: inherit;
  font-weight: 200;
  font-size: 22px;
  min-width: 60px;
  cursor: pointer;
  background: #47aba1;
  border: none;
  padding: 5px;
  align-self: stretch;
  border-radius: 3px;
  &:hover {
    background-color: #9bded5;
    color: #252525;
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 11px;
  align-items: end;
`;
export const Label = styled.label`
  font-weight: 200;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 22px;
  color: #252525;
  display: flex;
  align-items: center;
  gap: 3px;
`;
