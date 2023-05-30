import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operations';
import { selectItems } from '../../redux/contacts/contacts-selectors';

const ContactForm = () => {
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const resetValue = () => {
      setName('');
      setNumber('');
    };

    const existingContact = contacts.find(
      contact => contact.name === name || contact.number === number
    );
    if (existingContact) {
      alert('Contact with the same name or number already exists.');
      resetValue();
      return;
    }
    dispatch(addContact({ name, number }));
    resetValue();
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.addContactBtn}>
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;