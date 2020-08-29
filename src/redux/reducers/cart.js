const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

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

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzzas = [].concat.apply([], items);
      const totalPrice = getTotalPrice(allPizzzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzzas.length,
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
        totalCount: state.totalCount - currentTotalCount,
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
