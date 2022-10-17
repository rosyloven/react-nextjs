import { batch, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import {
  setLoadingAction,
  setPokemonDataAction,
} from "../store/modules/pokemonsSlice";
import { StyledLoading } from "../pages/components/pokemons/PokemonCard/views";

const src = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;

export const withPokemons = (Component) => {
  return (props) => {
    const dispatch = useDispatch();
    const pokemonData = useSelector((state) => state.pokemons.pokemonData);
    const loading = useSelector((state) => state.pokemons.loading);
    const activePokemon = useSelector((state) => state.pokemons.activePokemon);

    async function fetchPokemons() {
      const { data } = await axios(src);
      const results = data.results;
      dispatch(setLoadingAction(true));

      const resultData = await Promise.all(
        results.map(async (result) => {
          const data = await axios.get(result.url);
          return data.data;
        })
      );
      batch(() => {
        dispatch(setPokemonDataAction(resultData));
        dispatch(setLoadingAction(false));
      });

      console.log(resultData);
    }

    useEffect(() => {
      fetchPokemons();
    }, []);

    return loading ? (
      <StyledLoading />
    ) : (
      <Component
        pokemonData={pokemonData}
        loading={loading}
        activePokemon={activePokemon}
        {...props}
      />
    );
  };
};
