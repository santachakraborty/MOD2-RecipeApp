import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import RandomRecipeTile from './RandomRecipeTile';


class RandomRecipes extends React.Component{
  
    state = {
      recipes:[]
    }
  
  getRecipes = async (e) => {

    e.preventDefault();
    var url2 = `https://api.spoonacular.com/recipes/random?apiKey=d4809aeb7c574e4a856c6aa6a90034b8&number=10`;

    const api_call = await fetch(url2);
    const result= await api_call.json();
    console.log(result);
    console.log(result.recipes);
    this.setState({recipes: result.recipes});
    } 

   render(){
     return(
       <div className="random"> 
         <h2>Recipes Of The Day</h2>
         <form className="random_searchForm" onSubmit={this.getRecipes}>
            <input className="random_submit" type="submit" value="search" />
         </form>

         <div className="random_recipes">
               {this.state.recipes.map((recipe,index) => {

                // return <p>hello</p> 
                return <RandomRecipeTile recipe={recipe} key={index}/>
              })}
          </div>
       </div>
  )
 }
}
export default RandomRecipes;