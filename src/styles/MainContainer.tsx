import styled from 'styled-components';

import { COLORS } from './constants';

export const MainContainer = styled.div`
  font-size: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SelectContainer = styled(MainContainer)`
  background: ${COLORS['dark-foreground']};
`;

export const ResultsContainer = styled(MainContainer)`
  background: ${COLORS['dark-foreground']};
  flex-direction: column-reverse;
`;

export const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
  color: ${COLORS['light-primary']};
  background: ${COLORS['dark-foreground']};
`;

export const Subtitle = styled.p`
  color: ${COLORS['light-secondary']};
  background: inherit;
`;

export const Wrapper = styled.section`
  padding: 0.2em;
  background: ${COLORS['dark-foreground']};
  justify-content: space-around;
  border-bottom: 1px solid ${COLORS['dark-blue']};
  display: flex;
`;

export const SectionDiv = styled.section`
  background: inherit;
`;
