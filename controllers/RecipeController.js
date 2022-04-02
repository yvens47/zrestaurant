
var ObjectId = require('mongoose').Types.ObjectId;

// import users model
const RecipesModel = require("../models/recipes.model");

// all recipes
const Recipes = model => async (req, res) => {
  const recipesList = await model.find({}).exec();
  console.log(recipesList);
  res.render('Recipes/recipes', { data: recipesList });

}

// create
const Create = model => (req, res) => {

  console.log("creaate a recipe");

  res.json("create");

}
// read
const Read = model => async (req, res) => {

  try {
    const { id } = req.params;
    const result = model.findById(id,(error, doc)=>{
     
    if(error && !doc ) return res.render('notfound',{notFound:"Not Found."});

    return res.render("Recipes/recipe", { data: doc });
      
    });
   

  } catch (error) { console.log(error) };



}


// exporst
const recipes = Recipes(RecipesModel);
const create = Create(RecipesModel);
const read = Read(RecipesModel);

module.exports = RecipeController = {
  recipes, create, read
}
