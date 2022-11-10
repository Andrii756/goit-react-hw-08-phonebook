import styled from '@emotion/styled';
export const UserContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  background-color: #fff;
`;

export const WelcomeContainer = styled.div``;
export const WelcomeMessage = styled.p`
  margin-bottom: 8px;
  margin-top: 0;
`;
export const Email = styled.p`
  font-size: 12px;
  margin: 0;
`;
export const LogoutBtn = styled.button`
  background-color: #282424;
  color: #fff;
  padding: 6px;
  border-radius: 14px;
  cursor: pointer;
  transition: opacity 400ms ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;
