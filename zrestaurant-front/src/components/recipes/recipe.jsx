import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Recipe({recipe}) {

  return (

        <div className='recipe d-flex flex-column border shadow-sm m-2' style={{width:'33.33%'}}>
          <div className='image'>

          <Link to={`/recipe/${recipe._id}`}>
            <img src={recipe.image} alt={recipe.title} width='100%' />
            </Link>

          </div>
          <div className='details p-2'>
            <h2 className='title lead'>{recipe.title}</h2>

          </div>


        </div>

  );
}

export default Recipe;
