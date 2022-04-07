import React, {useContext} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from "react-router-dom";
import RecipesIndex from "./components/recipes/recipesIndex";
import RecipeDetail from "./components/recipes/recipeDetail"
import Navbar from "./components/navbar"
import {UserContext} from "./index.js";
console.log(Routes)
function App() {
  const user = useContext(UserContext)
  return (
    <div className="App">
     <Navbar user={user} />
      <Routes>
        <Route path="/" element={  <RecipesIndex user={user}  />}/>
        <Route path="/recipe/:id" element={  <RecipeDetail user={user}  />}/>

      </Routes>


    </div>
  );
}

export default App;
