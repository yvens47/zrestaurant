
import React,{useState,useEffect} from "react"
import {  useParams } from "react-router-dom";
import axios from "axios"

export default function RecipeDetail (props){
  let params = useParams();
  console.log(params)
  const [recipe, setRecipe] =useState({});
  const [error, setError] =useState(null)
  const [loading, setLoading] =useState(true);
  useEffect(()=>{

     axios.get(`http://localhost:5000/recipes/${params.id}`).then(
       function(data){
         setRecipe(data.data.data)
         console.log(data)
         setLoading(false);

       }
     ).catch(function(e){

       if(e.response ){
              setError(e.response.data.message);
              setLoading(false)
       }

     })
     return function(){
       // clean up goes here
     }





  },[])


  return (

    <div className='wrapper recipe-detail d-flex'>

      <aside className='aside-left border-start  d-flex flex-shrink-1'
       style={{width:"18%", top:"0px",background:"#f5f5f5", position:"fixed", height:"100%", zIndex:"100" }}>
       <div className="inner-side-wrap d-flex  justify-content-center align-items-end flex-column" style={{width:"100%", height:"100%", marginRight:"10px"}}>
     <div className="d-flex flex-column mb-1 justify-content-center align-items-center">
       <button className="save_btn btn btn-default d-flex flex-column justify-content-center align-items-center likes_btn btn  btn-default  justify-content-start align-items-center mb-2">
                 <span className="material-icons">favorite_border</span>
         <span>0</span>
               </button>


     </div>

        <div className="d-flex flex-column justify-content-center align-items-center ">

               <button className=" d-flex flex-column justify-content-center align-items-center likes_btn btn  btn-default  justify-content-start align-items-center">
                 <span className="material-icons">bookmark</span>
                 <span>0</span>
               </button>

     </div>


        <div className="d-flex flex-column justify-content-center align-items-center ">

               <button className=" d-flex flex-column justify-content-center align-items-center likes_btn btn  btn-default  justify-content-start align-items-center">
                 <span className="material-icons">thumb_up</span>
                 <span>0</span>
               </button>

     </div>


     </div>

      </aside>
      <main className='flex-grow-1' style={{marginLeft:"20%"}}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 py-3'>

              <div className='recipe-detail-wrapper d-flex flex-column'>
                <div className='header mt-5'>
                {error ?(
                  <div>
                      <h1> {error}</h1>
                      <p className='lead'>OOps</p>
                  </div>
                ):(
                  <>
                    {loading && "loading..."}
                    <h1 className='display-5'>{recipe.title}</h1>
                    <div className='image-wrapper'>
                        <img className='border p-2' src={recipe.image} alt={recipe.title} width='100%'/>
                    </div>
                    <div className='description-wrapper d-flex flex-column'>
                    <div className='text'>
                      <p className='lead'>{recipe.description}</p>

                    </div>
                    <div className='ingredients'>
                      <h1 className='ingredients-title'>Ingredients</h1>
                      {/*  display ingredients component here*/}
                      <div className='wrapper d-flex '>
                      {recipe.ingredients && recipe.ingredients.map(ingredient =>
                        <div className='ingredient mx-1 '>
                          <img className='border p-2' src={ingredient.image} alt={recipe.title} width='100%'/>
                            <p className='lead'>{ingredient.name}</p>


                        </div>

                      )}</div>

                    </div>
                    <div className='ingredients'>
                      <h1 className='steps-title'>Follow These Steps</h1>
                      {/*  display ingredients component here*/}
                      <div className='steps d-flex  flex-column border-start px-1'>
                      {recipe.steps && recipe.steps.map((step,index) =>
                        <div className='ingredient mx-1 '>
                            <div><p className='lead'>{index+1} {step}</p></div>


                        </div>

                      )}</div>

                    </div>
                    <div className='comment-wrapper'>
                    {/* comment form */}
                    <div class="comment_form_wrapper d-flex flex-row me-1 mt-3 mb-3">
                        <div class="profile_thumb me-2" >
                           <img  className='border p-2 rounded-circle'  style={{width:'45px', height:'45px'}}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpCKq1XnPYYDaUIlwlsvmLPZ-9-rdK28RToA&amp;usqp=CAU" class="border rounded-circle" width="100%"/>

                        </div>
                        <div class="d-flex flex-column flex-grow-1 mx-2">
                          {/*<label for="exampleFormControlTextarea1" class="form-label">Be the first to comment</label>  */}
    								             <textarea placeholder="write your comment" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                      </div>

                    <div className='comments'>

                      {/*  display comments component here*/}
                      <div className='comments d-flex  flex-column'>
                      {recipe.comments && recipe.comments.map((comment) =>
                        <div className='comment me-1 d-flex flex-row '>
                            <div className='flex-shrink-1 me-2'>
                                <img
                                style={{width:'45px', height:'45px'}}
                                 className='border p-2 rounded-circle' src={comment.profile} alt={comment.comment} width='100%'/>

                            </div>
                            <div className='d-flex flex-column flex-grow-1 border rounded mx-2 p-2'>
                              <div><p className='lead fw-bold'>{comment.name}</p></div>
                              <div><p className='lead'>{comment.comment}</p></div>
                            </div>
                        </div>

                      )}</div>

                    </div>

                    </div>
                    </div>
                    </>

                )}






                </div>


              </div>
            </div>

          </div>
        </div>

      </main>

      <aside className="aside border-start  d-flex flex-shrink-1 p-2"  style={{width:"28%",}}>
		<div className="inner-aside " style={{position:"fixed"}}>
		<div className="container">
			<div className="row py-4">

				<div className="col-md-12 py-5">
						<div className="user-recipe d-flex flex-sm-column border p-2 mb-2 shadow-sm ">
							<div className="flex-shrink-1 d-flex justify-content-center ">
                <div className="position-relative d-flex justify-content-center">
								<img className="rounded-circle p-3 border" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2" alt="username here" width="70%"/>
                </div>
							</div>
							<div className="flex-grow-1 ">
								<p className=" text-center">Jean Pierre</p>
								<p className="lead text-center">Lorem Lipsum.</p>
								<p className="text-center"><button className="btn btn-outline-primary btn-block">Follow</button>

							</p></div>
							<div></div>

							</div>
						<div className="user-recipe d-flex flex-sm-row border p-2 mb-2 shadow-sm mb-5">

							<div className="card" style={{width: "100%"}}>
							  <div className="card-header">
							    Most Popular
							  </div>
							  <ul className="list-group list-group-flush">
							    <li className="list-group-item">An item</li>
							    <li className="list-group-item">A second item</li>
							    <li className="list-group-item">A third item</li>
							  </ul>
							</div>

						</div>

				</div>
			</div>
		</div>
	</div>
	</aside>



    </div>
  )

}
