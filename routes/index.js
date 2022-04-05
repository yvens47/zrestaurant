var express = require("express");
const AuthController = require("../controllers/AuthController")
var router = express.Router();



/* GET home page. */
router.get("/",  function (req, res, next) {


  res.render("index", {
    data: {
      title: "Food Application-ejs",
      trendings: [
        {
          name: "Hot Spicy Latte",
          likes: "400",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          image:
            "https://images.pexels.com/photos/2323153/pexels-photo-2323153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          name: "Pumpkin Spicy smoothy",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          likes: "900",
          image:
            "https://images.pexels.com/photos/3756512/pexels-photo-3756512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
      isLogged:false

    },
  });
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



module.exports = router;
