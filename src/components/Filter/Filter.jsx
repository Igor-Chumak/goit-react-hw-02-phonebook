import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterLabel = styled.label`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing(3)};
  max-width: ${props => props.theme.spacing(80)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  font-weight: 600;
  line-height: 1.5;
  outline: 1px solid;
`;

const FilterInput = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.gray};
  &:focus {
    color: initial;
  }
`;

export class Filter extends Component {
  static propTypes = {
    handleChangeInputFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          maxLength="22"
          placeholder=""
          onChange={this.props.handleChangeInputFilter}
        />
      </FilterLabel>
    );
  }
}
