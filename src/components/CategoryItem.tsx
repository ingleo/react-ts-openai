import { CategoryOptions } from '../helpers/getCategories';

import { CategoryButton } from '../styles/Button';
import { Container } from '../styles/Container';

interface CategoryItemProps {
  key: string;
  category: CategoryOptions;
}

export const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <>
      <Container>
        <CategoryButton
          $primary={category.valid}
          type="button"
          key={category.id}
        >
          {category.name}
        </CategoryButton>
      </Container>
    </>
  );
};
