import { combineReducers } from 'redux';
import pokemonByIdReducer from './pokemon'

// Define your reducer function
const pokemonListReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return action.payload;
    default:
      return state;
  }
};

// Combine your reducers
const rootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemonById : pokemonByIdReducer
});

export default rootReducer;
