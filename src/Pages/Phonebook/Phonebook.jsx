import { useSelector } from 'react-redux';

import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Wrapper, Title, Subitle } from './Phonebook.styled';
import { errorMessage } from 'redux/contactsSlice';
import { Error } from 'components/Error/Error';

const Phonebook = () => {
  const error = useSelector(errorMessage);
  return (
    <Wrapper>
      {error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <Title>Phonebook</Title>
          <AddContactForm />
          <Subitle>Contacts</Subitle>
          <Filter />
          <ContactList />
        </>
      )}
    </Wrapper>
  );
};
export default Phonebook;
