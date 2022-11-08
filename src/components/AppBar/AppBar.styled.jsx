import styled from '@emotion/styled';
export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const Navigation = styled.nav`
  display: flex;
`;
export const MainNav = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 15px;
  li {
    a {
      display: inline-block;
      padding: 10px;
      color: #fff;
      text-decoration: none;
      transition: opacity 400ms ease-in-out;
      font-weight: 600;
      &.active {
        text-decoration: underline;
      }
      &:hover:not(.active),
      &:focus-visible:not(.active) {
        opacity: 0.8;
      }
    }
  }
`;
