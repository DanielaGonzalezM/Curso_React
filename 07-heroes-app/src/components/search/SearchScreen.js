import React from "react";
import { useForm } from "../hooks/useForm";

const SearchScreen = () => {
  const [formvalues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formvalues;
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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
      </div>
    </>
  );
};

export default SearchScreen;
