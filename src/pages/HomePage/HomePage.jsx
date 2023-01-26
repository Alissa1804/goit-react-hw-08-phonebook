import { Title, Div, Phone, Handset } from 'pages/HomePage/HomePage.styled';
import img from '../../images/phone2.png';
import img2 from '../../images/trubka.png';

export const HomePage = () => {
  return (
    <>
      <Div>
        <Title>Welcome to Phonebook APP!</Title>
      </Div>
      <Phone src={img} alt="Phone" width="300" />
      <Handset src={img2} alt="Phone" width="100" />
    </>
  );
};
