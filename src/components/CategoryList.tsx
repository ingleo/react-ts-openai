import React from 'react';
import styled from 'styled-components';

import { CategoryOptions } from '../helpers/getCategories';
import { CategoryItem } from './CategoryItem';

const List = styled.div`
  border-style: solid;
  border-width: 0.5px;
  border-color: #b57edc;
  background: #e6e6fa;
  justify-content: space-evenly;
`;

interface CategoryProps {
  categoryList: CategoryOptions[];
}

export const CategoryList: React.FC<CategoryProps> = ({ categoryList }) => {
  return (
    <>
      <div>
        <h4>Select one category for the suggestions</h4>
        <List>
          {categoryList.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </List>
      </div>
    </>
  );
};
