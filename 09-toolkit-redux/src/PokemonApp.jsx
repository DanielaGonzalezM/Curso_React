import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";


export const PokemonApp = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());

    }, []);
    const { pokemons = [], isLoading, page } = useSelector(state => state.pokemon)
    const dispitch = useDispatch();

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span> Loading: `{isLoading ? 'True' : 'False'}`</span>
            <ul>
                {pokemons.map(({ name }) => (
                    <li key={name}>{name}</li>
                ))}

            </ul>
            <button
                disabled={isLoading}
                onClick={() => { dispatch(getPokemons(page)) }}>
                next

            </button>
        </>
    )
}
