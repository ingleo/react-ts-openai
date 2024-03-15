import styled from 'styled-components';
import { COLORS } from './constants';

export const ResultsPanel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px ${COLORS['dark-blue']};
  background-color: ${COLORS['dark-foreground']};
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  width: 20em;
  background-color: ${COLORS['dark-primary']};
`;

export const ResultTitle = styled.p`
  padding-left: 10px;
  color: ${COLORS['light-foreground']};
  margin: 7px 0 7px 0;
  background-color: ${COLORS['dark-primary']};
`;

export const ListItem = styled.ol.attrs({
  type: '1',
})`
  background-color: inherit;
  li {
    padding: 0.3em 0 0.3em 0;
    border-bottom: solid 0px white;
    background-color: inherit;
  }

  li::marker {
    color: ${COLORS['light-green']};
  }

  label {
    padding-right: 10px;
    color: ${COLORS['light-foreground']};
    background-color: inherit;
  }

  a {
    color: ${COLORS['light-blue']};
    background-color: inherit;
  }
`;

export const ErrorMsg = styled.p`
  color: ${COLORS['light-foreground']};
  background-color: inherit;
`;
