import styled from 'styled-components';

export const Greet = styled.p`
  font-family: 'Oleo Script Swash Caps', cursive;
  font-size: 22px;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 26px;
  padding: 5px;
  cursor: pointer;
  font-family: 'Oleo Script Swash Caps', cursive;
  color: #47aba1;
  border: none;
  border-bottom: 3px dotted transparent;
  background-color: transparent;
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    -1px -1px 1px black;
  &:hover {
    color: #9bded5;
    border-bottom: 3px dotted #252525;
  }
`;
