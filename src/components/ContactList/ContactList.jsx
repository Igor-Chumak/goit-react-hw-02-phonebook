import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contactsToList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  render() {
    const { contactsToList } = this.props;
    return (
      <ContactListBox>
        {contactsToList.map(({ id, name, number }) => (
          <ContactItems name={name} number={number} key={id} />
        ))}
      </ContactListBox>
    );
  }
}
