import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { login } from 'redux/authSlice';
import {
  FormWrapper,
  FormContainer,
  ImageWrapper,
  Title,
  Description,
  InputWrapper,
  Input,
  Button,
  BottomText,
  ShowHidePass,
  IconCover,
} from './LoginForm.styled';
import { Loader } from 'components/Loader/Loader';
import { getIsLoadingAuth } from 'redux/authSlice';
import pandaImg from '../../images/cat-svgrepo-com.svg';

export const LoginForm = () => {
  const isPending = useSelector(getIsLoadingAuth);

  const dispatch = useDispatch();
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

  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    // resetForm();
  };
  return (
    <FormWrapper>
      {isPending && <Loader />}

      <FormContainer>
        <ImageWrapper>
          <img src={pandaImg} width="64" alt="User avatar" />
        </ImageWrapper>
        <Title>Sign In</Title>
        <Description>Please login to use the platform</Description>

        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              placeholder="Enter email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              placeholder="Enter password"
              type={togglePass}
              autoComplete="off"
              name="password"
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
          Don't have account?&nbsp;
          <NavLink to="/register">Create a free account.</NavLink>
        </BottomText>
      </FormContainer>
    </FormWrapper>
  );
};
