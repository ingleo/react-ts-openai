import { CategoryOptions } from '../interfaces';
import { CategoryItem } from './CategoryItem';

import { BorderList, SectionDiv, Subtitle } from '../styles';

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
      <SectionDiv>
        <Subtitle>&#128073; Select one category for the suggestions</Subtitle>
        <BorderList>
          {categoryList.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              onToggleCategory={onToggleCategory}
            />
          ))}
        </BorderList>
      </SectionDiv>
    </>
  );
};
