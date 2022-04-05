
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



  try {


    const {recipe, about} =req.body;
    if(recipe ===''){
      return res.json({message:"there must be a title"})

    }
    const recipeObject = {title:recipe,description:about};
    const newRecipe = new model(recipeObject);

    newRecipe.save(function(error){
      if(error)return res.json({message:"could not create document"})
      res.json({message:"success completed"})
        });

  } catch (e) {
    console.log(e);

  }







}
// read
const Read = model => async (req, res) => {

  try {
    const { id } = req.params;
<<<<<<< HEAD
    const result = model.findById(id,(error, doc)=>{
       console.log(doc)
      console.log(error)
    if(error && !doc ) return res.render('notfound',{notFound:"Not Found."});

    return res.render("Recipes/recipe", { data: doc });

    });

=======
    const result = model.findById(id, (error, doc) => {
      if (error && !doc) return res.render('notfound', { notFound: "Not Found." });
      
      return res.render("Recipes/recipe", { data: doc });

    });
>>>>>>> e95ecca17d2303af5533099b798a90c22065b83c

  } catch (error) { console.log(error) };



}


// exporst
const recipes = Recipes(RecipesModel);
const create = Create(RecipesModel);
const read = Read(RecipesModel);

module.exports = RecipeController = {
  recipes, create, read
}
