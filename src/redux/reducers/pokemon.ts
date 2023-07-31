
// Define your reducer function
const pokemonByIdReducer = (state = [], action: any) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return action.payload;
    default:
      return state;
  }
};

export default pokemonByIdReducer;
