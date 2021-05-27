import React from 'react';
import './RecipeCard.css';


const RecipeCard = ({recipe}) => {
  return (
    <div className="recipeTile" >
        

      <img className="recipeTile_img" src={recipe.recipe.image} />
      <p className="recipeTile_name">{recipe.recipe.label}</p>
      <a href={recipe.recipe.url}><button className="btn_viewRecipe">View Recipe</button></a>

      {/* <p>
        {recipe.ingredientLines.map(ingredient => (<li>{ingredient}</li>))}
      </p> */}
    </div>
  );
}

export default RecipeCard;
