import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectSortedContacts } from '../../redux/contacts/contacts-selectors';

const ContactList = () => {
const filteredContacts = useSelector(state => selectSortedContacts(state));

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