import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNavigation } from '../AuthNavigation/AuthNavigation';
import { UserAuthMenu } from '../UserAuthMenu/UserAuthMenu';
import { selectToken } from 'redux/auth/auth-selectors';
import { Outlet } from 'react-router-dom';
import { Header, Container } from './Layout.styled';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Header>
        <Container>
          <Navigation />
          {token ? <UserAuthMenu /> : <AuthNavigation />}
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
