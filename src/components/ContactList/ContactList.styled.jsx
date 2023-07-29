import styled from 'styled-components';

export const ContactListBox = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};
`;
