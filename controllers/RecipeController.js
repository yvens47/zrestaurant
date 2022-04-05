
var ObjectId = require('mongoose').Types.ObjectId;

// import users model
const RecipesModel = require("../models/recipes.model");
// const querystring = require('querystring');
const mongoosePaginate = require('mongoose-paginate-v2');

// all recipes
const Recipes = model => async (req, res) => {

  try {


    let { limit, page } = req.query; 

    const paginateData = await model.paginate({},
      {  limit: 2, page:parseInt(page) }
    );


    res.render('Recipes/recipes', { data: { data: paginateData, title: "All Recipes" } });
  }
  catch (e) {
    console.log(e)
  }

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
    const result = model.findById(id, (error, doc) => {
      if (error && !doc) return res.render('notfound', { notFound: "Not Found." });
      
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
