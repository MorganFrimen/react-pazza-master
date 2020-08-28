export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART_PIZZA',
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_PIZZA',
  payload: id,
});
