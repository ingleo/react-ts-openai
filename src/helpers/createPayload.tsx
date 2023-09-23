import {
  EnquiryPayload,
  PairOptions,
  CategoryOptions,
  Trait,
} from '../interfaces';

export const createPayload = (
  traitList: PairOptions[],
  categoryList: CategoryOptions[]
): EnquiryPayload => {
  const traits: string[] = [];
  const categories: string[] = [];

  traitList.forEach((pair) => {
    const selectedTrait: Trait | undefined = pair.traits.find(
      (trait) => trait.valid === true
    );
    selectedTrait && traits.push(selectedTrait.name);
  });

  const selectedCategory = categoryList.find(
    (category) => category.valid === true
  );
  selectedCategory && categories.push(selectedCategory.name);

  return {
    traits: traits.map((trait) => trait.toLowerCase()),
    categories: categories.map((category) => category.toLowerCase()),
  };
};
