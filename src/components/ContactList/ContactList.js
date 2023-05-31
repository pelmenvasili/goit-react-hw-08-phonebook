import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectSortedContacts, selectIsLoading  } from '../../redux/contacts/contacts-selectors';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const filteredContacts = useSelector(state => selectSortedContacts(state));
  const isLoading = useSelector(selectIsLoading);

  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.length !== 0 ? (
        filteredContacts.map(({ id, name, number, phone }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number || phone}
            id={id}
          />
        ))
      ) : (
        <p className={css.text}>No contact found with that name</p>
      )}
    </ul>
  );
};

export default ContactList;