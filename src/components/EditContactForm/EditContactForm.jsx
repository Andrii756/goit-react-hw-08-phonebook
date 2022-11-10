import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getContacts } from 'redux/contactsSlice';
import { updateContact } from 'redux/contactsSlice';
import {
  MainForm,
  InputWrapper,
  Label,
  Input,
  Button,
} from '../AddContactForm/AddContactForm.styled';
import { Title } from './EditContactForm.styled';
export const EditContactForm = ({
  contactName,
  contactNumber,
  contactId,
  onClose,
}) => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
    const nameValue = { name }.name;

    //  check the same contact
    const normalizedName = nameValue.toLowerCase();
    const isTheSame = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isTheSame) {
      toast.warning(`Contact "${isTheSame.name}" is already in contacts`);
      return;
    }

    dispatch(updateContact({ id: contactId, name, number }));
    toast.success(`Contact "${nameValue}" has been succesfully edited`);
    onClose();
    // resetForm();
  };
  return (
    <>
      <Title>Edit contact</Title>
      <MainForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Name</Label>
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <Label>Phone</Label>
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
          />
        </InputWrapper>
        <Button type="submit">Edit</Button>
      </MainForm>
    </>
  );
};
