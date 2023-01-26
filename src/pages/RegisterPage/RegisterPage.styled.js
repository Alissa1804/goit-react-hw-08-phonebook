import styled from 'styled-components';
import img from '../../images/book2.jpg';

export const Div = styled.div`
  width: 570px;
  height: 700px;
  border-radius: 8px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2cda3;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 50px 25px;
  box-shadow: 10px 14px 15px 0px rgba(0, 0, 0, 0.53);
`;
