import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 5px;
  color: #fff;
  font-family: inherit;
  font-size: 22px;
  font-weight: 200;
  cursor: pointer;
  background: #47aba1;
  border: none;
  padding: 5px;
  align-self: stretch;
  order: 3;
  border-radius: 3px;
  &:hover {
    background-color: #9bded5;
    color: #252525;
  }
  align-self: inherit;
`;
export const EButton = styled.button`
  min-width: 60px;
  color: #fff;
  font-family: inherit;
  font-size: 22px;
  font-weight: 200;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  background: #e4ba8a;
  border: none;
  padding: 5px;
  align-self: stretch;
  order: 3;
  border-radius: 3px;
  &:hover {
    background-color: #9bded5;
    color: #252525;
  }
  align-self: inherit;
`;

export const P = styled.p`
  color: #252525;
  font-weight: 400;
`;

export const PN = styled.p`
  color: #886f52;
  font-weight: 400;
  flex-grow: 1;
  font-size: 22px;
`;

export const Div = styled.div`
  align-self: flex-start;
`;
