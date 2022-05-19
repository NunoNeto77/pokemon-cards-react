import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemon-slice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { pokemonApi } from "../api/index";

const store = configureStore({
  
  reducer: {
    pokemon: pokemonSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),

});

setupListeners(store.dispatch);

export default store;