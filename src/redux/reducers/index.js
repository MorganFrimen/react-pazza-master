import { combineReducers } from 'redux';

import filtrsReduser from './filtrs';
import pizzasReduser from './pizzas';

const rootReduser = combineReducers({
  filtrs: filtrsReduser,
  pizzas: pizzasReduser,
});

export default rootReduser;
