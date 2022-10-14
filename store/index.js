import { configureStore } from '@reduxjs/toolkit'
import { pokemonsSlice } from './modules/pokemonsSlice'

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
  },
})

export default store