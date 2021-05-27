import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Main';
import Navbar from './component/Navbar';

import RandomRecipes from './component/RandomRecipes';
import Home from './component/Home';
import Header from './component/Header';

import RecipeVideoInfo from './component/RecipeVideoInfo';


function App(){
   return(
     <div>
       <Header />
       <Router>
         <div>
           <Navbar />
           <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Home" exact component={Home} />
              <Route path="/Main" exact component={Main} />
              <Route path="/RandomRecipes" exact component={RandomRecipes} />
              <Route path="/RecipeVideoInfo" exact component={RecipeVideoInfo} />
           </Switch>
         </div>
      </Router>
     </div>
  );
}
export default App;
