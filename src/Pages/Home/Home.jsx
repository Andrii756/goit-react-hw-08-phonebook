import mainImg from 'images/home.png';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/authSlice';

import { NavLink } from 'react-router-dom';

import {
  Wrapper,
  Container,
  TextContainer,
  HomeNav,
  LinkWrapper,
} from './Home.styled';
const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Wrapper>
      <Container>
        <img src={mainImg} alt="Main" width={150} />
        <TextContainer>
          <h1>Hey! Welcome</h1>
          <p>We are glad to see you at the main page of the "Phonebook" app.</p>
          {isLoggedIn ? (
            <LinkWrapper>
              <NavLink to="/contacts">To contacts</NavLink>
            </LinkWrapper>
          ) : (
            <HomeNav>
              <li>
                <NavLink to="/register"> Get Started</NavLink>
              </li>
              <li>
                <NavLink to="/login">I already have an account</NavLink>
              </li>
            </HomeNav>
          )}
        </TextContainer>
      </Container>
    </Wrapper>
  );
};
export default Home;
