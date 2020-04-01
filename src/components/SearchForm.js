import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Axios from "axios";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("chicken");
  const [results, setResults] = useState([]);

  const API_KEY = "e12ba31ff2c5d863361b3e9c4a042d6c";
  const API_ID = "40655c38";
  const API = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=20`;

  useEffect(() => {
    Axios.get(API).then(data => {
      console.log(data);
      setResults(data.data.hits);
      console.log(results);
    });
  }, [query]);

  const handleSearch = e => {
    setSearchQuery(e.target.value);
  };

  const getSearch = e => {
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
        <br />
        <select>
          <option>hello</option>
        </select>
        <select>
          <option>hello</option>
        </select>
        <select>
          <option>hello</option>
        </select>
      </form>
      <Recipe recipes={results} />
    </>
  );
};

export default Form;
