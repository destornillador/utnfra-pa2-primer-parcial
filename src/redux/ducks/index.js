import { combineReducers } from 'redux';

import allPokemonDucks from './allPokemonDucks';
import aPokemonDucks from './aPokemonDucks';

export default combineReducers({
  allPokemonDucks,
  aPokemonDucks
});