var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/RecipeController")
const multer  = require('multer');


const upload = multer({ dest: './public/uploads/' })



/* GET recipes listing. */

router.get("/", recipeController.recipes);
router.post("/",  upload.single('image'),(req, res) => {

  res.json({ message: req.body })
})



// get a recipes
router.get("/:id", recipeController.read)

// add a recipe
router.post("/add", upload.single('image'),recipeController.create);


module.exports = router;
