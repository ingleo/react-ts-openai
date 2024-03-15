import styled from 'styled-components';

import { COLORS } from './constants';

export const List = styled.div`
  background: ${COLORS['dark-foreground']};
  justify-content: space-evenly;
`;

export const BorderList = styled(List)`
  border-style: dashed;
  border-width: 0.5px;
  border-color: ${COLORS['light-purple']};
  background: ${COLORS['dark-primary']};
`;
