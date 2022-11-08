import AddContactForm from 'components/AddContactForm/AddContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { Wrapper, Title, Subitle } from './Phonebook.styled';
const Phonebook = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <AddContactForm />
      <Subitle>Contacts</Subitle>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};
export default Phonebook;
