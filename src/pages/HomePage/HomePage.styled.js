import styled, { keyframes } from 'styled-components';
import img from '../../images/book2.jpg';

const rotate = keyframes` 0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(10deg);
    }

    50% {
      transform: rotate(0deg);
    }

    75% {
      transform: rotate(-10deg);
    }

    100% {
      transform: rotate(0deg);
    }`;

const Translate = keyframes`
0% {
      transform: translateY(-100%);
    }
    50% {
      transform: translateY(10%);
    }
    100% {
      transform: translateY(0%);
    }`;

export const Title = styled.h1`
  font-family: 'Oleo Script Swash Caps', cursive;
  text-align: right;
  font-size: 70px;
  padding: 25px;
  text-decoration: 5px underline dotted;
`;

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

export const Phone = styled.img`
  position: absolute;
  bottom: 10px;
  left: 8%;
  animation-name: ${rotate};
  animation-duration: 800ms;
  animation-timing-function: linear;
  animation-iteration-count: 2;
`;

export const Handset = styled.img`
  position: absolute;
  top: -10%;
  right: 20%;
  animation-name: ${Translate};
  animation-duration: 2000ms;
`;
