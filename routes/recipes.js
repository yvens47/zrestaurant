var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/RecipeController")

/* GET recipes listing. */

router.get("/", recipeController.recipes );


// get a recipes
router.get("/:id", recipeController.read)

// add a recipe
router.post("/add", recipeController.create);


module.exports = router;
