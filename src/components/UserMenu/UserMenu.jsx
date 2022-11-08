import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/authSlice';

import { logout } from 'redux/authSlice';
import defaultAvatar from '../../images/cat-face.png';
import {
  UserContainer,
  ImageWrapper,
  WelcomeContainer,
  WelcomeMessage,
  Email,
  LogoutBtn,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);
  const userEmail = useSelector(getUserEmail);
  const avatar = defaultAvatar;
  return (
    <UserContainer>
      <ImageWrapper>
        <img src={avatar} width="32" alt="User avatar" />
      </ImageWrapper>
      <WelcomeContainer>
        <WelcomeMessage>
          Welcome, <span>{userName}</span>
        </WelcomeMessage>
        <Email>{userEmail}</Email>
      </WelcomeContainer>
      <LogoutBtn
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </LogoutBtn>
    </UserContainer>
  );
};
