import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { Navlink, Ul } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Ul>
        <li>
          <Navlink to="/">Home</Navlink>
        </li>
        {isLoggedIn && (
          <li>
            <Navlink to="/contacts">Contacts</Navlink>
          </li>
        )}
      </Ul>
    </nav>
  );
};
