var express = require('express');
var router = express.Router();
const Users = require("../models/users.model");
const UserController = require("../controllers/UserController")
const AuthController = require("../controllers/AuthController")



// signup
router.post("/register", AuthController.register);
router.post('/', AuthController.login);

// user home
router.get('/dashboard', AuthController.authenticate,function(req, res, next) {
  

    res.render('home', {  data: { title: "My dashboard",user: req.user,isLogged:true } })

});
// planner
router.get("/my-plan", AuthController.authenticate, (req, res) => {


  
  res.render("meal-planner", { data: { title: "", meals: [], recipes:[
    {name:"Peanut Butter Fried Chicken", steps:[],ingredients:[], image:"https://images.pexels.com/photos/3756512/pexels-photo-3756512.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}

    ], } });
});





module.exports = router;
