import React from "react";

const Recipe = ({ recipes }) => {
  return (
    <div className="recipe-container">
      {recipes.map((recipe, idx) => {
        return (
          <div key={idx} className="recipe">
            <img src={recipe.recipe.image} className="recipe-image" />
            <h2 className="recipe-title">{recipe.recipe.label}</h2>
            <button className="view-recipe">View Recipe</button>
          </div>
        );
      })}
    </div>
  );
};

export default Recipe;
