import React from 'react'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ( {
    getPokemonByName: builder.query( {
      query: (limit, offset) => `pokemon?limit=${limit}&offset=${offset}`,
    })
  })
});

export const { useGetPokemonByNameQuery } = pokemonApi;