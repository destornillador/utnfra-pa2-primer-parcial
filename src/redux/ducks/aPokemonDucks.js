import { loadingApp, loadedApp } from './allPokemonDucks';
import { getHTTP } from '../../utils/requests';
import { POKEMON_API_URL } from '../../utils/const';

const FETCH_POKEMON = 'FETCH_POKEMON';

const defaultState = {
  pokemon: {},
}

export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {

    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: payload.pokemon,
    }

    default:
      return state;
  }
}

function fetchPokemon(pokemon) {
    return {
      type: FETCH_POKEMON,
      payload: {
        pokemon,
      }
    }
  }


export function getPokemonById(id) {
  return async (dispatch, state) => {
    dispatch(loadingApp);

    try {
      const url = `${POKEMON_API_URL}/${id}`;
      const pokemon = await getHTTP(url);
      dispatch(fetchPokemon(pokemon));
      dispatch(loadedApp(false, false, ""));
    } catch {
      dispatch(loadedApp(false, true, "Error while fetching a Pokemon"));
    }
  }
}