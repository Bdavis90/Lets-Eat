import React from "react";
import { Link } from "react-router-dom";

const Recipes = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="recipe-container">
      {recipes.map((recipe, idx) => {
        return (
          <div key={idx} className="recipe">
            <img src={recipe.recipe.image} className="recipe-image" />
            <h2 className="recipe-title">
              {recipe.recipe.label.length < 20
                ? `${recipe.recipe.label}`
                : `${recipe.recipe.label.substring(0, 25)}...`}
            </h2>
            <button className="view-recipe">
              <Link to={{ pathname: `/recipe/${recipe.recipe.label}` }}>
                View Recipe
              </Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
