import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  PhonebookForm,
  PhonebookLabel,
  PhonebookInput,
  PhonebookSubmit,
} from './Phonebook.styled';

export class Phonebook extends Component {
  static propTypes = {
    // options: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     nameId: PropTypes.string.isRequired,
    //     buttonName: PropTypes.string.isRequired,
    //     btnColor: PropTypes.string.isRequired,
    //   })
    // ).isRequired,
    // onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { name, number, handleSubmit } = this.props;

    return (
      <PhonebookForm onSubmit={handleSubmit}>
        <PhonebookLabel>
          Name
          <PhonebookInput
            type="text"
            name="name"
            minLength="2"
            maxLength="22"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder=""
            required
          />
        </PhonebookLabel>
        <PhonebookLabel>
          Number
          <PhonebookInput
            type="tel"
            name="number"
            minLength="7"
            maxLength="17"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=""
            required
          />
        </PhonebookLabel>
        <PhonebookSubmit type="submit">Add contact</PhonebookSubmit>
      </PhonebookForm>
    );
  }
}
