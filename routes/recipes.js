var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/RecipeController")

/* GET recipes listing. */

router.get("/", recipeController.recipes);
router.post("/", (req, res) => {
  
  res.json({ message: req.body })
})



// get a recipes
router.get("/:id", recipeController.read)

// add a recipe
router.get("/add", recipeController.create);


module.exports = router;
