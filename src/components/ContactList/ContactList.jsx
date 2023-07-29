import { Component } from 'react';
import PropTypes from 'prop-types';

import { StatisticsBox } from './ContactList.styled';

export class ContactList extends Component {
  static propTypes = {
    // contacts: PropTypes.object.isRequired,
  };

  render() {
    const { contactsList } = this.props;
    return (
      <>
        <StatisticsBox>fhjnfdnfd</StatisticsBox>
      </>
    );
  }
}
