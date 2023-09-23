// import { useState } from 'react';

import { TraitList } from './components/TraitList';
import { useTraits } from './hooks/useTraits';
import { CategoryList } from './components/CategoryList';
import { useCategories } from './hooks/useCategories';

import { MainContainer, Title, Wrapper, EnquiryButton } from './styles';

function OpenAiApp() {
  const { traitListState, handleToggleTrait } = useTraits();
  const { categoriesListState, handleToggleCategory } = useCategories();
  // const [payloads, setPayloads] = useState([]);

  const handleCreatePayload = () => {
    console.log('click');
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
