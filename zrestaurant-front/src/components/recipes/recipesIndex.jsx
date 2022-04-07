import React,{useState, useEffect} from "react";
import axios  from 'axios';
import Recipes from './recipes'
import "./recipe.css";



export default function RecipesIndex (props){
     const [list, setList] =useState([]);
     const [error, setError] =useState(null)
     const [links, setLinks] =useState([])
     useEffect(()=>{
        axios.get('http://localhost:5000/recipes/?page=1&limit=4').then(
          function(data){
            setList(data.data.data)
          }
        ).catch(function(e){
          console.log(e)
        })
        return function(){
          // clean up goes here
        }





     },[])



  return (
    <div className='movie-index wrapper d-flex'>

      <div className='main'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              {error && error}

            <Recipes recipes={list && list.docs}/>


            </div>
            <div className='paging col-md-12'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {links.map((link)=>
                    <li

                     className="page-item"><a className="page-link" href="#">{link}</a></li>
                  )}







                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
                </nav>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
