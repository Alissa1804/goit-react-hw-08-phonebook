import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navlink, Ul } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
      <Ul>
        <li>
          <Navlink to="/">Home</Navlink>
        </li>
        {token && (
          <li>
            <Navlink to="contacts">Contacts</Navlink>
          </li>
        )}
      </Ul>
    </nav>
  );
};
