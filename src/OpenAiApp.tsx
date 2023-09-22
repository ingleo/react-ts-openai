import { TraitList } from './components/TraitList';
import { useTraits } from './hooks/useTraits';
import { CategoryList } from './components/CategoryList';
import { MainContainer, Title, Wrapper } from './styles/MainContainer';
import { useCategories } from './hooks/useCategories';

function OpenAiApp() {
  const { traitListState, handleToggleTrait } = useTraits();
  const { categoriesListState } = useCategories();

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
        <CategoryList categoryList={categoriesListState} />
      </MainContainer>
    </>
  );
}

export default OpenAiApp;
