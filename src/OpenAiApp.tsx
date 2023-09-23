// import { useState } from 'react';

import { TraitList, CategoryList} from './components';
import { createPayload } from './helpers/createPayload';
import { useTraits, useCategories} from './hooks';

import { MainContainer, Title, Wrapper, EnquiryButton } from './styles';

function OpenAiApp() {
  const { traitListState, handleToggleTrait } = useTraits();
  const { categoriesListState, handleToggleCategory } = useCategories();
  // const [payloads, setPayloads] = useState([]);

  const handleCreatePayload = () => {
    createPayload(traitListState, categoriesListState);
  };

  return (
    <>
      <Wrapper>
        <Title>OpenAI (Chat) Advisor</Title>
      </Wrapper>

      <MainContainer>
        <TraitList
          traitList={traitListState}
          onTogglePairTrait={handleToggleTrait}
        />
        <CategoryList
          categoryList={categoriesListState}
          onToggleCategory={handleToggleCategory}
        />
      </MainContainer>
      <Wrapper>
        <EnquiryButton onClick={handleCreatePayload}>
          Search for suggestions
        </EnquiryButton>
      </Wrapper>
    </>
  );
}

export default OpenAiApp;
