var express = require("express");
const AuthController = require("../controllers/AuthController")
var router = express.Router();



/* GET home page. */
router.get("/",  function (req, res, next) {

    res.json({data:"api v1."})
});



/* login form  users listing. */
router.get('/login', function(req, res, next) {
  if(req.cookies.jwt){
    res.redirect("/users/dashboard");
  }

  res.render('login',{data:{title:"Login"}});
});

router.get('/register', function(req, res, next) {
  res.render('register',{data:{title:"Sign up"}});
});
router.get("/add", (req, res)=>{
  res.render("Recipes/add",{title:"Add A recipe"});
})

router.get("/diet", (req, res)=>{

  const diets=["Vegetarian", "Ketogenic",'Paleo',"Gluten Free","Lacto-Vegetarian","Whole30","Perscetarian"];

  res.render("diet", {data:{title:"set your diet",diets}});
})

router.get("/my-calendar", (req, res)=>{

  res.render("calendar", {data:[]})
})


module.exports = router;
