import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: inherit;
  font-weight: normal;
  font-size: 20px;

  &::before {
    display: inline-block;
    padding-right: 8px;
    color: inherit;
    content: '•';
  }
`;

export const Delete = styled.button`
  display: block;
  margin-left: ${props => props.theme.spacing(4)};
  padding-left: ${props => props.theme.spacing(2)};
  padding-right: ${props => props.theme.spacing(2)};
  min-width: ${props => props.theme.spacing(5)};
  color: initial;
  font-weight: bold;
  line-height: 1;
  font-size: ${props => props.theme.fontSizes.smallest};
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    transform: scale(1.05);
  }
`;

export class ContactItems extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };

  render() {
    const { name, number } = this.props;
    return (
      <ContactItem>
        {name} : {number}
        <Delete type="button">Delete</Delete>
      </ContactItem>
    );
  }
}
