import PRODUCTS from '../../data/dummy-data';
import { Product } from '../../models/product';
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../actions/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  const { userProducts, availableProducts } = state;
  const { type, productData, pid } = action;
  switch (type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        productData.title,
        productData.imageUrl,
        productData.description,
        productData.price
      );
      return {
        ...state,
        availableProducts: availableProducts.concat(newProduct),
        userProducts: userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = userProducts.findIndex((prod) => prod.id === pid);
      const updatedProduct = new Product(
        pid,
        userProducts[productIndex].ownerId,
        productData.title,
        productData.imageUrl,
        productData.description,
        userProducts[productIndex].price
      );
      const updatedUserProducts = [...userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = availableProducts.findIndex(
        (prod) => prod.id === pid
      );
      const updatedAvailableProducts = [...availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: userProducts.filter((product) => product.id !== pid),
        availableProducts: availableProducts.filter(
          (product) => product.id !== pid
        ),
      };
  }
  return state;
};
