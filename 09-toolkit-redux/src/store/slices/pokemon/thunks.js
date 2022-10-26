import { setPokemon, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());

        //TODO: realizar petición http
        //dispatch(setPokemon());
    }
}



//https://pokeapi.co/api/v2/pokemon?limit=10&offset=0