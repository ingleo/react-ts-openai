import styled from 'styled-components';
import { CategoryOptions } from '../helpers/getCategories';

const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#BF4F74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  justify-content: space-evenly;
`;

interface CategoryItemProps {
  key: string;
  category: CategoryOptions;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <>
      <CategoryContainer>
        <Button $primary={category.valid} type="button" key={category.id}>
          {category.name}
        </Button>
      </CategoryContainer>
    </>
  );
};
