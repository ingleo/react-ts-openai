import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1em;
  margin: 0.8em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const TraitButton = styled(Button)<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};
  box-shadow: ${(props) =>
    props.$primary ? '1px 0px 9px 7px rgb(212 24 24 / 20%)' : 'none'};
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

export const CategoryButton = styled(Button)<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? 'darkorange' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : 'darkorange')};
  box-shadow: ${(props) =>
    props.$primary ? '1px 0px 9px 7px rgb(198 133 42 / 39%)' : 'none'};
  border: 2px solid darkorange;
  border-radius: 3px;
`;

export const EnquiryButton = styled(Button)`
  background: #26619c;
  color: white;
  border: 2px solid #26619c;
  border-radius: 3px;
  &:focus {
    background: #4682b4;
    outline: none;
  }
`;
