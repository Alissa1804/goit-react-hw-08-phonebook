import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 200;
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 26px;
  color: #252525;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Input = styled.input`
  font-family: inherit;
  font-weight: 400;
  font-size: 20px;
  width: 400px;
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
