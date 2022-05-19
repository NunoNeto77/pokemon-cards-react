import React, { useState, useRef } from "react";
import arrow from "../../assets/arrow.jpg";
import "./Dropdown.css";


function Dropdown({value, setValue}) {
  // const [value, setValue] = useState("All");
  const [isActive, setActive] = useState("false");

  //cria um array de referencias
  const buttonEl = useRef(new Array());

  const handleSelect = (e) => {
    //o newRefArray é a referencia do array de referencias
    let newRefArray = buttonEl.current;

    //percorre o newRefArray
    for (let i = 0; i < newRefArray.length; i++) {
      //se o botao no momento é o botao clicado altera o seu background para black
      if (newRefArray[i] === e.target) {
        newRefArray[i].style.backgroundColor = "whitesmoke";
        continue;
      }
      //para todos os outros a cor original
      newRefArray[i].style.backgroundColor = "pink";
    }

    setValue(e.target.innerHTML);
  };

  const handleToggle = () => setActive(!isActive);

  return (
    <>
      <div >
        <div>
          <button className="click" onClick={handleToggle}>
            {value}
            <img src={arrow} className={isActive ? "arrow" : "rotate"} />
          </button>

          <div className={isActive ? "list" : "newList"}>
            {/* define no array ButtonEl a referencia do mesmo elemento na dada posição por ordem     */}
            <button
              ref={(e) => (buttonEl.current[0] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              All
            </button>

            <button
              ref={(e) => (buttonEl.current[1] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Normal
            </button>

            <button
              ref={(e) => (buttonEl.current[2] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Poison
            </button>

            <button
              ref={(e) => (buttonEl.current[3] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Electric
            </button>

            <button
              ref={(e) => (buttonEl.current[4] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Fire
            </button>

            <button
              ref={(e) => (buttonEl.current[5] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Water
            </button>

            <button
              ref={(e) => (buttonEl.current[6] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Rock
            </button>

            <button
              ref={(e) => (buttonEl.current[7] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Grass
            </button>

            <button
              ref={(e) => (buttonEl.current[8] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Fighting
            </button>

            <button
              ref={(e) => (buttonEl.current[9] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Psychic
            </button>

            <button
              ref={(e) => (buttonEl.current[10] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Ground
            </button>

            <button
              ref={(e) => (buttonEl.current[11] = e)}
              className="links"
              onClick={(e) => {
                handleSelect(e);
                handleToggle();
              }}
            >
              Fairy
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;