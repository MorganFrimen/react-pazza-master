import { combineReducers } from 'redux';

import filtrs from './filtrs';
import pizzas from './pizzas';
import cart from './cart';

const rootReduser = combineReducers({
  filtrs,
  pizzas,
  cart,
});

export default rootReduser;
