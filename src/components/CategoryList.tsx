import React from 'react';

import { CategoryOptions } from '../helpers/getCategories';
import { CategoryItem } from './CategoryItem';

import { BorderList } from '../styles/List';

interface CategoryProps {
  categoryList: CategoryOptions[];
}

export const CategoryList: React.FC<CategoryProps> = ({ categoryList }) => {
  return (
    <>
      <div>
        <h4>Select one category for the suggestions</h4>
        <BorderList>
          {categoryList.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </BorderList>
      </div>
    </>
  );
};
