import React, { useState, useEffect } from "react";
import Recipes from "./Recipes";
import Axios from "axios";

const Form = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("chicken");
  const [results, setResults] = useState([]);
  const [healthQuery, setHealthQuery] = useState("vegan");

  const API = `https://api.edamam.com/search?q=${query}&health=${healthQuery}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`;

  useEffect(() => {
    Axios.get(API).then((data) => {
      console.log(data);
      setResults(data.data.hits);
      console.log(results);
    });
  }, [query]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleHealthQuery = (e) => {
    setHealthQuery(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
    setSearchQuery("");
  };

  console.log(healthQuery);

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
        <select onChange={handleHealthQuery}>
          <option value="">Select..</option>
          <option value="vegan">Vegan</option>
          <option value="kosher">Kosher</option>
          <option value="dairy-free">Dairy-Free</option>
        </select>
        <select>
          <option>hello</option>
        </select>
        <select>
          <option>hello</option>
        </select>
      </form>
      <div>
        <Recipes recipes={results} className="recipe-container" />
      </div>
    </>
  );
};

export default Form;
