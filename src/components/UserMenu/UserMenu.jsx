import { useSelector, useDispatch } from 'react-redux';
import { getUserName, getUserEmail } from 'redux/authSlice';
import { getIsLoadingAuth } from 'redux/authSlice';
import { TailSpin } from 'react-loader-spinner';

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
  const isPending = useSelector(getIsLoadingAuth);

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
        disabled={isPending}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <span>Logout</span>
        {isPending && (
          <TailSpin
            height="12"
            width="12"
            color="#e3e4ed"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </LogoutBtn>
    </UserContainer>
  );
};
