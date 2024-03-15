import styled from 'styled-components';

import { COLORS } from './constants';

export const Button = styled.button`
  font-size: 1em;
  margin: 0.8em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const TraitButton = styled(Button)<{ $primary?: boolean }>`
  background: ${(props) =>
    props.$primary ? COLORS['light-red'] : COLORS['dark-primary']};
  color: ${(props) =>
    props.$primary ? COLORS['light-foreground'] : COLORS['light-red']};
  box-shadow: ${(props) =>
    props.$primary ? '1px 0px 9px 8px rgb(212 24 24 / 20%)' : 'none'};
  border: 2px solid ${COLORS['light-red']};
  border-radius: 3px;
`;

export const CategoryButton = styled(Button)<{ $primary?: boolean }>`
  background: ${(props) =>
    props.$primary ? COLORS['dark-orange'] : COLORS['dark-primary']};
  color: ${(props) =>
    props.$primary ? COLORS['light-foreground'] : COLORS['dark-orange']};
  box-shadow: ${(props) =>
    props.$primary ? '1px 0px 9px 7px rgb(198 133 42 / 39%)' : 'none'};
  border: 2px solid ${COLORS['dark-orange']};
  border-radius: 3px;
`;

export const EnquiryButton = styled(Button)`
  background: ${COLORS['dark-blue']};
  color: ${COLORS['light-foreground']};
  border: 2px solid ${COLORS['dark-blue']};
  border-radius: 3px;
  &:focus {
    background: ${COLORS['light-blue']};
    outline: none;
  }
`;
