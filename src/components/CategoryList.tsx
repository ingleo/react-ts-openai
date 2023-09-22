import React from 'react';
import styled from 'styled-components';

import { CategoryOptions } from '../helpers/getCategories';

const List = styled.div`
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
        <h5>Select one category for the suggestions</h5>
        <List>
          {categoryList.map((category) => (
            <p>{category.name}</p>
          ))}
        </List>
      </div>
    </>
  );
};
