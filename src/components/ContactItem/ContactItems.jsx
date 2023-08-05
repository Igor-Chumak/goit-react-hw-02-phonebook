import { Component } from 'react';
import PropTypes from 'prop-types';
import { Delete } from 'components';
import { ContactItem } from './ContactItems.styled';

export class ContactItems extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  render() {
    const { name, number, id } = this.props;
    return (
      <ContactItem>
        {name} : {number}
        <Delete type="button" id={id}>
          Delete
        </Delete>
      </ContactItem>
    );
  }
}
