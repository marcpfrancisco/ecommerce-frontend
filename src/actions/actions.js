import * as actions from "types/actionTypes";

export const addProduct = (product) => {
  return {
    type: actions.ADD_PRODUCT,
    payload: {
      product_name: product.product_name,
      description: product.description,
      price: product.price,
    },
  };
};

export const removeProduct = (id) => {
  return {
    type: actions.REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
};
