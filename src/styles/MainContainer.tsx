import styled from 'styled-components';

export const MainContainer = styled.div`
  font-size: 1em;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SelectContainer = styled(MainContainer)`
  background: #e6e6fa;
`;

export const ResultsContainer = styled(MainContainer)`
  background: #e0eee0;
  flex-direction: column-reverse;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #26619c;
  background: #e6e6fa;
`;

export const Wrapper = styled.section`
  padding: 0.2em;
  background: #e6e6fa;
  justify-content: space-around;
  border-bottom: 1px solid #26619c;
  display: flex;
`;
