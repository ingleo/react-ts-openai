import { CategoryOptions } from '../interfaces';

import { CategoryButton, Container } from '../styles';

interface CategoryItemProps {
  key: string;
  category: CategoryOptions;
  onToggleCategory: (id: string) => void;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  onToggleCategory,
}) => {
  return (
    <>
      <Container>
        <CategoryButton
          $primary={category.valid}
          type="button"
          key={category.id}
          onClick={() => onToggleCategory(category.id)}
        >
          {category.name}
        </CategoryButton>
      </Container>
    </>
  );
};
