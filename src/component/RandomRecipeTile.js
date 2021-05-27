import React from 'react';
import "./RecipeCard.css";

export default function RandomRecipeTile({recipe}) {
  return (
    <div className="random_recipeTile">
      <img className="random_recipeTileImg" src={recipe.image} />
      <p className="random_recipeTileName" >{recipe.title}</p>

      <a href={recipe.sourceUrl}><button className="btn_viewRecipe">View Recipe</button></a>
      

      

    </div>
  );
}
