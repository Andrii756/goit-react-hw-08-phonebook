import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contactsSlice';
import {
  MainForm,
  InputWrapper,
  Label,
  Input,
  Button,
} from '../AddContactForm/AddContactForm.styled';
import { Title } from './EditContactForm.styled';

export const EditContactForm = ({ contactName, contactNumber, contactId }) => {
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
    // console.log();
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(login({ email, password }));
    console.log(e);
    // console.log({ name, number });
    // console.log(contactId);
    dispatch(updateContact({ id: contactId, name, number }));
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
