import React, { useState } from "react";
import './App.css';
import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Pokemons from "./components/Pokemons/index";

function App() {
  const [value, setValue] = useState("All");
  
  return (
    <div className="App">
      <div className="dropdown-container">
        <strong className="pokemonList">pokemon list</strong>
        <Dropdown value={value} setValue={setValue} />
      </div>

      <div className="pokemons-app">
        <Pokemons value={value} />
      </div>

      
    </div>
  );
}

export default App;