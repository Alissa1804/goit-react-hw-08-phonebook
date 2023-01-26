import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { Container, Title, MTitle, P } from './ContactsPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <MTitle>Contacts</MTitle>
      <Filter />
      {isLoading && <Loader />}
      {contacts.length > 0 && !isLoading && <ContactList />}
      {contacts.length === 0 && !isLoading && (
        <P>Your Phonebook is emty. Please, add your contacts.</P>
      )}
      {error && <p>{error.message}</p>}
    </Container>
  );
};
