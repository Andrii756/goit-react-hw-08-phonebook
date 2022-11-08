import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getContacts, addContact, isAdding } from '../../redux/contactsSlice';

import { nanoid } from 'nanoid';
import {
  MainForm,
  InputWrapper,
  Label,
  Input,
  Button,
} from './AddContactForm.styled';

export default function AddContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const phoneInputId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isPending = useSelector(isAdding);

  const pushDataToArr = contact => {
    dispatch(addContact(contact));
  };

  const formSubmitHandler = data => {
    //  check the same contact
    const normalizedName = data.name.toLowerCase();

    const isTheSame = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isTheSame) {
      alert(`${isTheSame.name} is already in contacts`);
      return;
    }
    pushDataToArr(data);
    toast.success(`Contact "${data.name}" has been succesfully added`);
    formReset();
  };

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e);
    // console.log({ name, number });
    formSubmitHandler({ name, number });
  };

  return (
    <MainForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          id={nameInputId}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor={phoneInputId}>Phone</Label>
        <Input
          id={phoneInputId}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </InputWrapper>

      <Button type="submit" disabled={isPending}>
        <span>Add contact</span>
        {isPending && (
          <TailSpin
            height="20"
            width="20"
            color="#e3e4ed"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </Button>
    </MainForm>
  );
}
