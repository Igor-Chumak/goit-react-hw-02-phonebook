import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactItem = styled.li`
  color: inherit;
  font-weight: normal;
  font-size: 20px;
`;

export class ContactItems extends Component {
  static propTypes = {
    contactToList: PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  };

  render() {
    // const { {id} } = this.props;
    const { contactToList } = this.props;
    console.log(contactToList);
    return;
    <ContactItem key={contactToList.id}>jtjt</ContactItem>;
  }
}
