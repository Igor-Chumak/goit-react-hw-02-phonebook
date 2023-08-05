import { Component } from 'react';
import PropTypes from 'prop-types';
import { Message, NotificationBox } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
    children: PropTypes.element,
  };

  render() {
    return (
      <NotificationBox>
        <Message>{this.props.message}</Message>
        {this.props.children}
      </NotificationBox>
    );
  }
}
