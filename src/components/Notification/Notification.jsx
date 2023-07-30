import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.div`
  width: 100%;
  color: inherit;
  font-weight: normal;
  font-size: 20px;
  text-transform: none;
  text-align: center;
  background-color: ${props => props.theme.colors.alert};
`;

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string,
  };

  render() {
    return <Message>{this.props.message}</Message>;
  }
}
