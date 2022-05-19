import React, { useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetPokemonByNameQuery } from "../../api";
import Pagination from "../Pagination/index"
import "./Pokemons.css"
import ReactLoading from "react-loading";
const Pokemons = ({value}) => {

  
  const loadingImage = "https://thumbs.gfycat.com/FairSinfulCottontail-max-1mb.gif";
   
  // const dispatch = useDispatch();
 // const pokemonsList = useSelector((state) => state.pokemon.pokemonsList);
 // const setShowPokemon = useSelector((state) => state.pokemon.setShowPokemon);
  const [pokeList, setPokelist] = useState({});
  const { data, error, isLoading } = useGetPokemonByNameQuery(30, 0);
  const [all, setAll] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerpage] = useState(6);

  // Get current posts
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;


 

  //  Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  }

    const filterByType = (pokeType) => {

      if(pokeType === "All"){
   
        setPokelist(all);
        return;
      }
      
      const arr = Object.values(all).filter(
        (pokemon) => pokemon.type === pokeType.toLowerCase()
      );
      setPokelist(arr);
    };



  const newData = data && data.results; // or optional chaining - data?.results

  let newDataLength = newData && newData.length;

  useEffect(() => {
 
    for (let i = 0; i < newDataLength; i++) {
      const pokemon = newData[i].url;

  fetch(pokemon)
        .then((response) => response.json())
        .then((pokeData) => {
          const pokemonName = pokeData.forms[0].name; // const pokemonName = data.name;

          const pokemonImage =
            pokeData.sprites.versions["generation-v"]["black-white"].animated
              .front_default;
          const pokemonType = pokeData.types[0].type.name;
          const pokemonHp = pokeData.stats[0].base_stat;
          const pokemonAttack = pokeData.stats[1].base_stat;

          const pokemonDefense = pokeData.stats[2].base_stat;
          const pokemonSpecialAttack = pokeData.stats[3].base_stat;
          const pokemonSpecialDefense = pokeData.stats[4].base_stat;
          const pokemonSpeed = pokeData.stats[5].base_stat;
          const pokemonHeight = pokeData.height;
          const pokemonWeight = pokeData.weight;
          const pokemonAbility = pokeData.abilities[0].ability.name;
        const pokemonHiddenAbility = pokeData.abilities[1].ability.name;

        setAll((existing) => ({
            ...existing,
            [pokemonName]: {
              type: pokemonType,
              img: pokemonImage,
              name: pokemonName,
              hp: pokemonHp,
              attack: pokemonAttack,
              defense: pokemonDefense,
              specialAttack: pokemonSpecialAttack,
              specialDefense: pokemonSpecialDefense,
              speed: pokemonSpeed,
              height: pokemonHeight,
              weight: pokemonWeight,
              ability: pokemonAbility,
           hiddenAbility: pokemonHiddenAbility

            },
          }));
        });
    }
    

  }, [newData]);


  useEffect(() => {
    filterByType(value);
  }, [value,all]);



  const currentPokemons = pokeList === {} ? Object.values(all).slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ) :  Object.values(pokeList).slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  )


  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>
          <ReactLoading type="spin" color="pink" height={500} width={300} />
        </>
      ) : data ? (
        <>
          
          {currentPokemons.map((item) => (
            <>
              <article className={item.type}>
                <div className="pokeImage-container">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="pokemonImage"
                  />
                </div>

                <div className="type">{item.type}</div>

                <div className="informationsContainer">
                  <h1 className="pokemonName">{item.name}</h1>

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
                      <strong className="hpValue">{item.hp}</strong>

                      <strong className="attackValue">{item.attack}</strong>

                      <strong className="defenseValue">{item.defense}</strong>

                      <strong className="specialAttackValue">
                        {item.specialAttack}
                      </strong>

                      <strong className="specialDefenseValue">
                        {item.specialDefense}
                      </strong>

                      <strong className="speedValue">{item.speed}</strong>

                      <strong className="heightValue">{item.height}</strong>

                      <strong className="weightValue">{item.weight}</strong>
                    </div>
                  </div>

                  <div className="abilitiesContainer">
                    <p className="ability">
                      ABILITY: <br />
                      <strong className="abilityValue">{item.ability}</strong>
                    </p>
                    <p className="hiddenAbility">
                      HIDDEN ABILITY: <br />
                      <strong className="hiddenAbilityValue">
                        {item.hiddenAbility}
                      </strong>
                    </p>
                  </div>
                </div>
              </article>
            </>
          ))}
          <div>
            <Pagination
              pokemonsPerPage={pokemonsPerPage}
              totalPokemons={Object.keys(pokeList).length}
              paginate={paginate}
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Pokemons;