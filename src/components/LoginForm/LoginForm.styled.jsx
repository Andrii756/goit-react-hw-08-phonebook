import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  text-align: center;
  padding: 10px;
  * {
    font-family: 'Lato', sans-serif;
  }
`;
export const FormContainer = styled.div`
  background-color: #f5e5e5;
  border-radius: 20px;
  width: fit-content;
  padding: 25px 35px;
  margin-left: auto;
  margin-right: auto;
`;
export const ImageWrapper = styled.div`
  text-align: center;
`;
export const Title = styled.h1`
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: center;
`;
export const Description = styled.p`
  text-align: center;
  margin-bottom: 24px;
`;
export const InputWrapper = styled.label`
  display: block;
  margin-bottom: 10px;
  &:last-of-type {
    position: relative;
  }
`;
export const Input = styled.input`
  border-radius: 20px;
  outline: transparent;
  padding: 10px 20px;
  width: 100%;
  border: 1px solid transparent;
  transition: all 400ms ease-in-out;
  &:hover,
  &:focus {
    border: 1px solid #000;
  }
`;
export const Button = styled.button`
  color: #fff;
  cursor: pointer;
  background-color: #000;
  border-radius: 20px;
  padding: 10px 20px;
  margin-top: 10px;
  width: 100%;
  transition: opacity 400ms ease-in-out;
  &:hover,
  &:focus,
  &:active {
    opacity: 0.8;
  }
`;
export const BottomText = styled.p`
  font-size: 14px;
  a {
    color: rgb(25, 118, 210);
    cursor: pointer;
    text-decoration-color: transparent;
    transition: text-decoration-color 400ms ease-in-out;
    &:hover {
      text-decoration-color: blue;
    }
  }
`;
export const ShowHidePass = styled.div`
  cursor: pointer;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(-50%, -40%);
`;
export const IconCover = styled.span`
  svg {
    width: 20px;
    height: 20px;
  }
`;
