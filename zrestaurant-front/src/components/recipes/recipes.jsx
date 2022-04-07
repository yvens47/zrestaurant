import React, {useContext} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Recipe from "./recipe"

function Recipes({recipes}) {

  return (
    <div className="recipes d-flex flex-sm-row">
    {recipes && recipes.map((doc)=>
        <Recipe key={doc._id} recipe ={doc}/>
    )}
    </div>
  );
}

export default Recipes;
