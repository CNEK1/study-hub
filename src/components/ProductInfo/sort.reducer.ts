import { SortEnum } from "../Sort/Sort.props";
import { ProductModel } from "../../data/ProductModel.inteface";

export type SortAction =
  | { type: SortEnum }
  | { type: SortEnum.Raiting }
  | { type: "reset"; initialState: ProductModel[] };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

export const sortReducer = (
  state: SortReducerState,
  action: SortAction
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Raiting:
      return {
        sort: SortEnum.Raiting,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };
    case "reset":
      return {
        sort: SortEnum.Raiting,
        products: action.initialState,
      };
    default:
      throw new Error("Sorting Error!");
  }
};
