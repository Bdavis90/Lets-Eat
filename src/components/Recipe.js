import React, { useState, useEffect } from "react";
import Axios from "axios";

const Recipe = ({ match }) => {
  const [id] = useState(match.params.id);
  const [item, setItem] = useState([]);

  console.log(match);
  const API = `https://api.edamam.com/search?q=${id}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=100`;

  useEffect(() => {
    Axios.get(API).then((data) => {
      console.log(data.data.hits);
      setItem(data.data.hits[0].recipe);
    });
  }, [id]);
  console.log(item);
  return (
    <div className="current-recipe">
      <img className="current-recipe-image" src={item.image}></img>
    </div>
  );
};

export default Recipe;
