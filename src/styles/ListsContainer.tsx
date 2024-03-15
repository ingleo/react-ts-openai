import styled from 'styled-components';

import {COLORS } from './constants';

export const Container = styled.div`
  justify-content: space-evenly;
  background-color: ${COLORS['dark-primary']};
`;

export const TraitsContainer = styled(Container)`
  border-style: dashed;
  border-width: 0.5px;
  border-color: ${COLORS['light-purple']};
`;
