import { NavLink } from 'react-router-dom';
import { MainNav } from '../AppBar/AppBar.styled';
import { AuthNavContainer } from './AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <MainNav>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </MainNav>
    </AuthNavContainer>
  );
};
