var express = require('express');
var router = express.Router();
const Recipes = require("../models/recipes.model");

/* GET recipes listing. */

router.get("/", (req, res) => {
 
  res.render("recipes", { data:Recipes});
})

// get a recipes
router.get("/:id", (req, res)=>{
  const {id}= req.params;
  const results = Recipes.filter((value)=>value.id === id);

  //no resulst
  if(results.length == 0)
    return res.json({data:{notFound:true, message:"Oops The page you are looking for is not found..."}}); 

  return res.render("recipe",{data:results[0]});
})


module.exports = router;
