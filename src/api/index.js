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

/*
const Pokemon = (props) => {


  return (
    <>
      <div className="type">TYPE</div>
      <article className="pokemonCard">
        
        <div className="pokemonImage">
          <img src={props.pokemon.sprites.front_default}
          alt = {props.pokemon.name}/>
          {props.pokemonImage}
          </div>

        <div className="informationsContainer">
          <h1 className="pokemonName">OLA {props.name}</h1>

          <div className="firstInformations">
            <div className="informationsText">
              <p className="characteristics">HP:</p>
              <p className="characteristics">ATTACK:</p>
              <p className="characteristics">DEFENSE:</p>
              <p className="characteristics">SPECIAL ATTACK:</p>
              <p className="characteristics">SPECIAL DEFENSE:</p>
              <p className="characteristics">SPEED:</p>
              <p className="characteristics">HEIGHT:</p>
              <p className="characteristics">WEIGHT:</p>
            </div>

            <div className="informationsValue">
              <strong className="hpValue">{props.hp}</strong>

              <strong className="attackValue">{props.attack}</strong>

              <strong className="defenseValue">{props.defense}</strong>

              <strong className="specialAttackValue">{props.specialAttack}</strong>

              <strong className="specialDefenseValue">
                {props.specialDefense}
              </strong>

              <strong className="speedValue">{props.speed}</strong>

              <strong className="heightValue">{props.height}</strong>

              <strong className="weightValue">{props.weight}</strong>
            </div>
          </div>

          <div className="abilitiesContainer">
            <p className="ability">
              ABILITY: <br />
              <strong className="abilityValue">{props.ability}</strong>
            </p>
            <p className="hiddenAbility">
              HIDDEN ABILITY: <br />
              <strong className="hiddenAbilityValue">{props.hiddenAbility}</strong>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Pokemon; */