import { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItems } from 'components';
import { ContactListBox } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    contactsToList: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };

  render() {
    const { contactsToList } = this.props;
    console.log('contactsToList: ', contactsToList);
    return (
      <ContactListBox>
        {contactsToList.map(contactToList => (
          <ContactItems contactToList={contactToList} />
        ))}
      </ContactListBox>
    );
  }
}
