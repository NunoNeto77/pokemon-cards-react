import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const pokemonSlice = createSlice( {
    name: "pokemon",
    initialState: {
        pokemonsList: [],
        showPokemon: false
    },

    reducers: {


        setShowPokemon(state) {
            state.showPokemon = !state.showPokemon;
        }
    }
});

export const pokemonActions = pokemonSlice.actions;
export default pokemonSlice;