import './App.css';
import Axios from 'axios';
import {useState} from 'react';
import RecipeCard from './component/RecipeCard';

const YOUR_APP_ID = "79367048";
const YOUR_APP_KEY = "b2364856beb6cd73176c2d9876f71606";
// var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

function Main(){

  const [query , setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel,sethealthLabel] = useState("dairy-free");

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
 }

  const onSubmit = (e) =>{
    e.preventDefault();
    getRecipes();
  }
  
  return(
    <div className="main">
      <h2>Search Recipes</h2>
      <form className="main_searchForm" onSubmit={onSubmit}>
        
         <input className="main_input" type="text" placeholder="enter ingredient" 
        value={query} onChange={(e) =>setquery(e.target.value)}/>
        <input className="main_submit" type="submit" value="search" />
    
         <select className="main_healthLabel">
            
            <option onClick = {() => sethealthLabel("dairy-free")}>Dairy-Free</option>
            <option onClick = {() => sethealthLabel("vegan")}>Vegan</option>
            <option onClick = {() => sethealthLabel("vegetarian")}>Vegetarian</option>
            <option onClick = {() => sethealthLabel("low-sugar")}>Low-Sugar</option>
            <option onClick = {() => sethealthLabel("egg-free")}>Egg-Free</option>
            <option onClick = {() => sethealthLabel("gluten-free")}>Gluten-Free</option>
            <option onClick = {() => sethealthLabel("wheat-free")}>Wheat-Free</option>
            <option onClick = {() => sethealthLabel("fish-free")}>Fish-free</option>
            <option onClick = {() => sethealthLabel("soy-free")}>Soy-Free</option>
            <option onClick = {() => sethealthLabel("tree-nut-free")}>Tree-Nut-Free</option>
         </select>

      </form>
      <div className="main_recipes">
        {recipes.map((recipe) => {

          // return <p>{recipe.recipe.label}</p>;
          return <RecipeCard recipe={recipe}/>;
        })}
      </div>
    </div>
  )
}
export default Main;