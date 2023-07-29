import { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Container } from 'components';
import { Title, SectionBox } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.arrayOf(oneOfType([PropTypes.element, PropTypes.bool])),
  };

  render() {
    const { title, children } = this.props;
    return (
      <SectionBox>
        <Container>
          <Title>{title}</Title>
          {children}
        </Container>
      </SectionBox>
    );
  }
}
