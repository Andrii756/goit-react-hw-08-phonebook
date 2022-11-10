import { useSelector, useDispatch } from 'react-redux';

import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { errorMessageAuth } from 'redux/authSlice';
import Modal from 'components/Modal/Modal';
import { Error } from 'components/Error/Error';
import { AiOutlineClose } from 'react-icons/ai';
import { resetError } from 'redux/authSlice';

import {
  EditContainer,
  CloseModal,
} from '../../components/ContactItem/ContactItem.styled';

const Register = () => {
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
            <Error addMessage={<span>This email is already exist</span>}>
              {error}
            </Error>
          </EditContainer>
        </Modal>
      )}
      <SignUpForm />
    </>
  );
};

export default Register;
