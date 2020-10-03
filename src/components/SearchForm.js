import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import Axios from "axios";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("chicken");
  const [results, setResults] = useState([]);

  const API = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`;

  useEffect(() => {
    Axios.get(API).then((data) => {
      setResults(data.data.hits);
    });
  }, [API]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
    setSearchQuery("");
  };

  return (
    <>
      <form className="search-form" onSubmit={getSearch}>
        <label hidden>Search Bar</label>
        <input
          className="search-input"
          onChange={handleSearch}
          value={searchQuery}
        />
        <button>Search</button>
      </form>
      <div className="recipe-container">
        <Recipes recipes={results} className="recipe-container" />
      </div>
    </>
  );
};

export default Form;
