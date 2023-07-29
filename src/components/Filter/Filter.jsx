import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterForm = styled.div`
  max-width: ${props => props.theme.spacing(80)};
  margin: 0 auto;
  padding-bottom: ${props => props.theme.spacing(1)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  outline: 1px solid;
`;

const FilterLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-weight: 600;
  line-height: 1.5;
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
      <FilterForm>
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
      </FilterForm>
    );
  }
}
