import * as actions from "types/actionTypes";

export const productReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actions.ADD_PRODUCT:
      return [
        ...state,
        {
          product_name: payload.product_name,
          description: payload.description,
          price: payload.price,
        },
      ];
    case actions.REMOVE_PRODUCT:
      return state.filter((product) => product.id !== payload.id);
    default:
      return state;
  }
};
