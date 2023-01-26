import styled from 'styled-components';

export const Header = styled.header`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border-bottom: 2px solid #47aba1;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  background: #e4ba8a;
`;

export const Container = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
`;
