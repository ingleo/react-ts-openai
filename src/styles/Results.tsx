import styled from 'styled-components';

export const ResultsPanel = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 1px green;
`;

export const Results = styled.div`
  display: flex;
  flex-direction: column;
  border-right: solid 2px white;
  border-left: solid 2px white;
  width: 20em;
`;

export const ResultTitle = styled.h4`
    padding-left: 10px;
    color: #26619c;
    margin: 10px 0 10px 0
`

export const ListItem = styled.ol.attrs({
  type: '1',
})`
  li {
    padding: 0.5em 0 0.5em 0;
    border-bottom: solid 2px white;
  }

  li::marker {
    color: #26619c;
  }

  label {
    padding-right: 10px;
  }

  a {
    color: #26619c;
  }
`;
