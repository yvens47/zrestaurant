var express = require('express');
var router = express.Router();
const Users = require("../models/users.model");
const UserController = require("../controllers/UserController")



// signup
router.post("/register", UserController.register);
router.post('/', UserController.login);

// user home
router.get('/dashboard', function(req, res, next) {
  const email = true;
  // user logged in
  if (email) {
    res.render('home', { user: { username: "yvens47" }, data: { title: "My dashboard" } })

  } else {

    // otherwise redirect to login
    res.redirect("/login")

  }
});





module.exports = router;
