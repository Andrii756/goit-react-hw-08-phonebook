import styled from '@emotion/styled';
export const Wrapper = styled.div`
  padding-top: 20px;
  * {
    font-family: 'Lato', sans-serif;
  }
`;
export const Container = styled.div`
  text-align: center;
`;
export const TextContainer = styled.div`
  background-color: #f5e5e5;
  padding: 25px 35px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
`;
export const HomeNav = styled.ul`
  list-style-type: none;
  li {
    a {
      width: fit-content;
      display: inline-block;
      cursor: pointer;
      border-radius: 20px;
      padding: 10px 20px;
      margin-top: 10px;
      transition: opacity 400ms ease-in-out;
      text-decoration: none;
      &:hover,
      &:focus,
      &:active {
        opacity: 0.8;
      }
    }
    &:first-of-type {
      a {
        color: #fff;
        background-color: #000;
      }
    }
    &:last-of-type {
      a {
        color: #000;
        border: 1px solid #000;
        background-color: #fff;
      }
    }
  }
`;
export const LinkWrapper = styled.div`
  a {
    width: fit-content;
    display: inline-block;
    cursor: pointer;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 10px;
    transition: opacity 400ms ease-in-out;
    text-decoration: none;
    color: #fff;
    background-color: #000;
    &:hover,
    &:focus,
    &:active {
      opacity: 0.8;
    }
  }
`;
