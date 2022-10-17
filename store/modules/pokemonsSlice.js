import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonData: [],
  activePokemon: "",
  loading: false,
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setLoadingAction: (state, action) => {
      state.loading = action.payload;
    },
    setPokemonDataAction: (state, action) => {
      state.pokemonData = action.payload;
      state.pokemonData = state.pokemonData.sort((a, b) => a.id - b.id);
    },
    setActivePokemonAction: (state, action) => {
      state.activePokemon = action.payload;
    },
  },
});

export const {
  setPokemonDataAction,
  setLoadingAction,
  setActivePokemonAction,
} = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
