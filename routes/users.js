var express = require('express');
var router = express.Router();
const Users = require("../models/users.model");
const UserController = require("../controllers/UserController")





router.post('/', UserController.login );

// user home

router.get('/home/:email', function(req, res, next) {
   const {email} = req.params;
   console.log(email);

  res.render('home', { userName :email, data:{title:"Dashboard"}} )
});





module.exports = router;
