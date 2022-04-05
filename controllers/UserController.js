
// import users model
const Users = require("../models/users.model");

<<<<<<< HEAD

// login user
const Login = model => async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Users.findOne({ email: email }).exec();
    if (!user) {
      return res.status(400).send({ message: "The username does not exist" });
    }
    // session and jwt
    const {_id, about, username} = user;
    res.json(
      { data:{isLogged:true}, success: true, message: "Logged in ", user:{email, _id, about, username} });

  } catch (e) {

    res.json(e);


  }



}

const Register = model => async (req, res, next) => {

  try {
    const { email, password } = req.body;
    if (email !== '' && password !== '' && password.length >= 8) {
      // check if user already existed
      const oldUser = await Users.findOne({email:email});
      if(oldUser) return res.json({message:"Account already existed"});
      // create new user but first hash passwords
      const user = new Users({ email: email, password: password });
      user.save(function(err) {
        if (err) {
          console.log(err);
          // type of error
          let errorMsg = '';

          if (err.code == 11000 && err.keyPattern.email == 1) {
            errorMsg = "Email already registered";
          }
          return res.json({ error: errorMsg });
        }
        
        res.json({ message: "You have registered successfully", success: true })
      });

    }

  } catch (e) {
    console.log(e)
  };
}


const login = Login(Users);
const register = Register(Users);


module.exports = UserController = {
  login: login,
  register
}
=======
>>>>>>> e95ecca17d2303af5533099b798a90c22065b83c
