import { Component } from 'react';
import PropTypes from 'prop-types';
// import { ButtonBox, Button } from './Phonebook.styled';

export class Phonebook extends Component {
  // static propTypes = {
  //   options: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       nameId: PropTypes.string.isRequired,
  //       buttonName: PropTypes.string.isRequired,
  //       btnColor: PropTypes.string.isRequired,
  //     })
  //   ).isRequired,
  //   onLeaveFeedback: PropTypes.func.isRequired,
  // };

  render() {
    return (
      <form>
        <label>
          {' '}
          Name
          <input
            type="text"
            name="name"
            minlength="2"
            maxlength="20"
            autocomplete="username"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            minlength="7"
            maxlength="10"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
