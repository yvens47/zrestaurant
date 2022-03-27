var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {


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
      isLogged:true

    },
  });
});

// planner
router.get("/my-plan", (req, res) => {
  res.render("meal-planner", { data: { title: "", meals: [], recipes:[
    {name:"Peanut Butter Fried Chicken", steps:[],ingredients:[], image:"https://images.pexels.com/photos/3756512/pexels-photo-3756512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}

    ], } });
});

/* login form  users listing. */
router.get('/login', function(req, res, next) {
  res.render('login',{data:{title:"Login"}});
});


router.get('/register', function(req, res, next) {

  res.render('register',{data:{title:"Sign up"}});
});




module.exports = router;
