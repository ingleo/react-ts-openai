import { EnquiryPayload, PairOptions, CategoryOptions } from '../interfaces';

export const createPayload = (
  traitList: PairOptions[],
  categoryList: CategoryOptions[]
): EnquiryPayload => {
  console.log(traitList);
  console.log(categoryList);

  return { traits: [], categories: [] };
};
