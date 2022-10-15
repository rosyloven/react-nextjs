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
      state.pokemonData.push(action.payload);
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
