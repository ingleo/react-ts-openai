import { useState } from 'react';

import { TraitList, CategoryList } from './components';
import { createPayload } from './helpers/createPayload';
import { useTraits, useCategories } from './hooks';

import {
  Title,
  Wrapper,
  EnquiryButton,
  SelectContainer,
  ResultsContainer,
} from './styles';
import { ResultsGrid } from './components/ResultsGrid';
import { EnquiryPayload } from './interfaces';

const initialState: EnquiryPayload[] = [];

function OpenAiApp() {
  const { traitListState, handleToggleTrait } = useTraits();
  const { categoriesListState, handleToggleCategory } = useCategories();
  const [payloads, setPayloads] = useState(initialState);

  const handleCreatePayload = () => {
    const payload: EnquiryPayload = createPayload(
      traitListState,
      categoriesListState
    );
    setPayloads([...payloads, payload]);
  };

  return (
    <>
      <Wrapper>
        <Title>OpenAI (ChatGPT) Advisor</Title>
      </Wrapper>

      <SelectContainer>
        <TraitList
          traitList={traitListState}
          onTogglePairTrait={handleToggleTrait}
        />
        <CategoryList
          categoryList={categoriesListState}
          onToggleCategory={handleToggleCategory}
        />
      </SelectContainer>
      <Wrapper>
        <EnquiryButton onClick={handleCreatePayload}>
          Search for suggestions
        </EnquiryButton>
      </Wrapper>
      {payloads.length !== 0 && (
        <ResultsContainer>
          {payloads.map((payload, index) => (
            <ResultsGrid key={index} enquiryPayload={payload} />
          ))}
        </ResultsContainer>
      )}
    </>
  );
}

export default OpenAiApp;
