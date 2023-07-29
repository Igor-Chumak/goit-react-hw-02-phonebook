import styled from 'styled-components';

export const PhonebookForm = styled.form`
  max-width: ${props => props.theme.spacing(80)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(5)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  display: block;
  margin: 0 auto;
  label:last-of-type {
    margin-bottom: ${props => props.theme.spacing(5)};
  }
  border-color: inherit;
  border: 2px solid;
`;

export const PhonebookLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing(3)};
  font-weight: 600;
  line-height: 2;
`;

export const PhonebookInput = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  &::placeholder {
    color: orange;
    border-color: orange;
  }
  &:not(:placeholder-shown):invalid {
    border-color: red;
  }

  &:not(:placeholder-shown):valid {
    border-color: green;
  }
`;

export const PhonebookSubmit = styled.button`
  display: block;
  min-width: ${props => props.theme.spacing(5)};
  padding: ${props => props.theme.spacing(2)};
  color: initial;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;
