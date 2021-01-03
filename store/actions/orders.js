export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems, totalAmout) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItems, amout: totalAmout },
  };
};
