import { useSelector, useDispatch } from 'react-redux';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { errorMessageAuth } from 'redux/authSlice';
import Modal from 'components/Modal/Modal';
import { Error } from 'components/Error/Error';
import { AiOutlineClose } from 'react-icons/ai';
import { resetError } from 'redux/authSlice';

import {
  EditContainer,
  CloseModal,
} from '../../components/ContactItem/ContactItem.styled';

const Login = () => {
  const error = useSelector(errorMessageAuth);
  const dispatch = useDispatch();

  return (
    <>
      {error && (
        <Modal>
          <EditContainer>
            <CloseModal
              onClick={() => {
                dispatch(resetError());
              }}
            >
              <AiOutlineClose />
            </CloseModal>
            <Error addMessage={<span>Wrong email or password</span>}>
              {error}
            </Error>
          </EditContainer>
        </Modal>
      )}
      <LoginForm />
    </>
  );
};

export default Login;
