import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../hero/HeroCard";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";


const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formvalues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formvalues;
  const heroesFiltered = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };
  return (
    <>
      <h1>Búsqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Buscar...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
