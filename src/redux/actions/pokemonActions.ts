import axios from 'axios';
import { Dispatch } from 'redux';

export const setPokemonList = (pokemonList: any[]) => ({
  type: 'SET_POKEMON_LIST',
  payload: pokemonList,
});

export const getPokemonById = (pokemonList: any[]) => ({
  type: 'GET_POKEMON',
  payload: pokemonList,
});

export const fetchPokemonList = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
      const data = response.data.results;
      console.log(response.data.results)
      dispatch(setPokemonList(data));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };
};

export const fetchPokemonById = (id : any) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = response.data;
      console.log(response.data, '?????????????????????????????')
      dispatch(getPokemonById(data));
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };
};
