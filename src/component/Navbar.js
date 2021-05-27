import React from 'react';
import {Link} from 'react-router-dom';
import "../App.css";

const Navbar = () =>{
   return(
      <nav className="navbar">
     
       <ul>
         {/* <Link className="navLink" to='/'><li>Home</li></Link> */}
         <Link className="navLink" to='/Home'><li>Home</li></Link>
         <Link className="navLink" to='/Main'><li>Recipe Index Page</li></Link>
         <Link className="navLink" to='/RandomRecipes'><li>Today's Recipes</li></Link>
         <Link className="navLink" to='/RecipeVideoInfo'><li>Recipe video Info</li></Link>
      </ul>
      
     </nav>
     
   );
}

export default Navbar;