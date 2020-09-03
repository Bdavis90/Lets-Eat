import React from "react";

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
            <a className="view-recipe" href={recipe.recipe.url}>
              View Recipe
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
