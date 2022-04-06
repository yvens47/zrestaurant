
var ObjectId = require('mongoose').Types.ObjectId;


// import users model
const RecipesModel = require("../models/recipes.model");
// const querystring = require('querystring');
const mongoosePaginate = require('mongoose-paginate-v2');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    console.log(file)
  cb(null, `./public/uploads`);

  },
  filename: function (req, file, cb){
    console.log("Line 18", file, req);
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
   cb(null, file.fieldname + '-' + uniqueSuffix)

  }
})

const fileFilter = (req, file, cb)=>{
//

  if(file. mimetype ==='image/jpeg'){

  }


}
//const upload = multer({ storage: storage ,fileFilter, limits:{fileSize: Infinity}}).single("image");

//const upload = multer({ storage: storage ,fileFilter, limits:{fileSize: Infinity}}).single("image");

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
const Create = model =>  (req, res) => {
  try {

    console.log(req);


    const {recipe, about} =req.body;
    if(recipe ===''){
      return res.json({message:"there must be a title"})

    }
    const recipeObject = {title:recipe,description:about};
    const newRecipe = new model(recipeObject);

    newRecipe.save(function(error){
      console.log(error);
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

    const result = model.findById(id, (error, doc) => {
      if (error && !doc) return res.render('notfound', { notFound: "Not Found." });
      return res.render("Recipes/recipe", { data: doc });
    })



  } catch (error) { console.log(error) };



}


// exporst
const recipes = Recipes(RecipesModel);
const create = Create(RecipesModel);
const read = Read(RecipesModel);

module.exports = RecipeController = {
  recipes, create, read
}
