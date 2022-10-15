import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  setLoadingAction,
  setPokemonDataAction,
} from "../store/modules/pokemonsSlice";
import { StyledLoading } from "../pages/components/pokemons/PokemonCard/views";

const src = "https://pokeapi.co/api/v2/pokemon/";

export const withPokemons = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const pokemonData = useSelector((state) => state.pokemons.pokemonData);
    const loading = useSelector((state) => state.pokemons.loading);
    const cancelLoading = () => dispatch(setLoadingAction(false));
    const activePokemon = useSelector((state) => state.pokemons.activePokemon);

    useEffect(() => {
      dispatch(setLoadingAction(true));
      axios.get(src).then((data) => {
        setTimeout(cancelLoading, 1000);
        data.data.results.forEach((pokemon) => {
          axios.get(pokemon.url).then((data) => {
            dispatch(setPokemonDataAction(data.data));
          });
        });
      });
    }, []);
    if (loading) return <StyledLoading />;
    return (
      <Component
        pokemonData={pokemonData}
        loading={loading}
        activePokemon={activePokemon}
        {...props}
      />
    );
  };
};
