import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authSlice';
import {
  FormWrapper,
  FormContainer,
  ImageWrapper,
  Title,
  Description,
  InputWrapper,
  BottomText,
  Input,
  Button,
  IconCover,
  ShowHidePass,
} from '../LoginForm/LoginForm.styled';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import pandaRegister from '../../images/cat-svgrepo-com.svg';

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [togglePass, setTogglePass] = useState('password');
  const togglePassword = () => {
    if (togglePass === 'password') {
      setTogglePass('text');
    } else {
      setTogglePass('password');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({ name, email, password });
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <FormWrapper>
      <FormContainer>
        <ImageWrapper>
          <img src={pandaRegister} width="64" alt="User avatar" />
        </ImageWrapper>
        <Title>Sign Up</Title>
        <Description>Please create account to use the platform</Description>
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            {/* <span>Name</span> */}
            <Input
              placeholder="Enter name"
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            {/* <span>Email</span> */}
            <Input
              placeholder="Enter email"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            {/* <span>Password</span> */}
            <Input
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              type={togglePass}
              value={password}
              onChange={handleChange}
            />
            <ShowHidePass onClick={togglePassword}>
              {togglePass === 'password' ? (
                <IconCover>
                  <AiFillEye />
                </IconCover>
              ) : (
                <IconCover>
                  <AiFillEyeInvisible />
                </IconCover>
              )}
            </ShowHidePass>
          </InputWrapper>
          <Button type="submit">Submit</Button>
        </form>
        <BottomText>
          Have account?&nbsp;
          <NavLink to="/login">Log in</NavLink>
        </BottomText>
      </FormContainer>
    </FormWrapper>
  );
};
