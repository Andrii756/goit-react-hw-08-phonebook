import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner';

import { AiOutlineDelete, AiFillEdit, AiOutlineClose } from 'react-icons/ai';

import { deleteContact } from '../../redux/contactsSlice';
import { isDeleting, isUpdating } from '../../redux/contactsSlice';

import {
  Card,
  CardText,
  DeleteBtn,
  Buttons,
  EditContainer,
  CloseModal,
} from './ContactItem.styled';
import Modal from 'components/Modal/Modal';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

const ContactItem = ({ id, name, number }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const isPending = useSelector(isDeleting);
  const isUpdatingContact = useSelector(isUpdating);

  const removeContact = (toDeleteId, name) => {
    dispatch(deleteContact(toDeleteId));
    toast.success(`Contact "${name}" has been succesfully deleted`);
  };

  return (
    <Card>
      <CardText>
        <span>{name}: </span>
        <span>{number}</span>
      </CardText>
      <Buttons>
        <DeleteBtn
          type="button"
          onClick={toggleModal}
          disabled={isUpdatingContact}
        >
          <span>Edit&nbsp;</span>
          <AiFillEdit />
        </DeleteBtn>
        <DeleteBtn
          type="button"
          disabled={isPending}
          onClick={() => removeContact(id, name)}
        >
          {isPending ? (
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
          ) : (
            <AiOutlineDelete />
          )}
        </DeleteBtn>
      </Buttons>

      {modal && (
        <Modal onClose={toggleModal}>
          <EditContainer>
            <CloseModal onClick={toggleModal}>
              <AiOutlineClose />
            </CloseModal>
            <EditContactForm
              contactName={name}
              contactNumber={number}
              contactId={id}
              onClose={toggleModal}
            />
          </EditContainer>
        </Modal>
      )}
    </Card>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
