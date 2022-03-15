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
    },
  });
});

module.exports = router;
