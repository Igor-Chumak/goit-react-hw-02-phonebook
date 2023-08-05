import { Component } from 'react';
import PropTypes from 'prop-types';
import { Clear } from 'components';
import { FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  static propTypes = {
    handleChangeInputFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <FilterLabel
        onChange={this.props.handleChangeInputFilter}
        onClick={this.props.handleChangeInputFilter}
      >
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          maxLength="22"
          placeholder=""
          id="filter"
        />
        <Clear type="button">Clear</Clear>
      </FilterLabel>
    );
  }
}
