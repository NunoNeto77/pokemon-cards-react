import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pagination.css";

const Pagination = (props) => {

  const pageNumbers = [];
  const totalPages = Math.ceil(
    props.totalPokemons / props.pokemonsPerPage
  );

  for (let i = 1; i <= totalPages; i++) {
    
    pageNumbers.push(i);
  }

  const navigate = useNavigate();

  const changeURL = (num) => {
    navigate(`/?page=${num}`);
    
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <button
                onClick={() => {
                  props.paginate(number);
                  changeURL(number);
                }}
                className="paginationButton"
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;