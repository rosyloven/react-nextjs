import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonData: [],
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
  },
});

export const { setPokemonDataAction, setLoadingAction } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
