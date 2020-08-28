const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const getTotalSum = (obj, key) => {
  const arrKeys = key.split('.');
  const value = arrKeys.reduce((val, key) => val[key], obj[arrKeys[0]]);
  return Object.keys(obj).reduce((sum, key) => {
    const value = obj[key].items.length + sum;
    obj[key].items.length + sum;
    return sum;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].items.length + sum,
        0,
      );
      const totalPrice = Object.keys(newItems).reduce(
        (sum, key) => newItems[key].totalPrice + sum,
        0,
      );

      const totalCount = totalSum(newItem, 'items.length');
      const totalPrice = totalSum(newItem, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    case 'SET_TOTAL_COUNT':
      return {
        ...state,
        totalCount: action.payload,
      };

    case 'REMOVE_CART_PIZZA':
      const newItemsPizza = {
        ...state.items,
      };
      const currentTotalPrice = newItemsPizza[action.payload].totalPrice;
      const currentTotalCount = newItemsPizza[action.payload].items.length;
      delete newItemsPizza[action.payload];
      return {
        ...state,
        items: newItemsPizza,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalPrice - currentTotalCount,
      };

    case 'CLEAR_CART_PIZZA': {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    default:
      return state;
  }
};

export default cart;
