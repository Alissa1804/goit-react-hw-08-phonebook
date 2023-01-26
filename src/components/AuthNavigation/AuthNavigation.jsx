import { ALink, Ul } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <Ul>
      <li>
        <ALink to="register">Register</ALink>
      </li>
      <li>
        <ALink to="login">Login</ALink>
      </li>
    </Ul>
  );
};
