import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import { Greet, Button } from './UserAuthMenu.styled';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <>
      <Greet>{`Welcome, ${name}!`}</Greet>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
    </>
  );
};
