import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ALink = styled(Link)`
  text-decoration: none;
  font-family: 'Oleo Script Swash Caps', cursive;
  color: #47aba1;
  font-size: 32px;
  text-shadow: 0 0 5px black;
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    -1px -1px 1px black;
  &:hover {
    color: #9bded5;
    border-bottom: 3px dotted #252525;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 18px;
`;
