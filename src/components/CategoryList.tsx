import { CategoryOptions } from '../interfaces';
import { CategoryItem } from './CategoryItem';

import { BorderList } from '../styles';

interface CategoryProps {
  categoryList: CategoryOptions[];
  onToggleCategory: (categoryId: string) => void;
}

export const CategoryList: React.FC<CategoryProps> = ({
  categoryList,
  onToggleCategory,
}) => {
  return (
    <>
      <div>
        <h4>&#128073; Select one category for the suggestions</h4>
        <BorderList>
          {categoryList.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              onToggleCategory={onToggleCategory}
            />
          ))}
        </BorderList>
      </div>
    </>
  );
};
