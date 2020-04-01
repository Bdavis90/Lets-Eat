import React from "react";

const Recipe = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe, idx) => {
        return <div key={idx}> {recipe.recipe.label}</div>;
      })}
    </div>
  );
};

export default Recipe;
