
// import users model
const Users = require("../models/users.model");



const Login = model => async (req, res, next) => {
  const { email } = req.body;
  const found = model.filter((user) => user.email === email)[0];
  // user not found redirect back to login
  if (!found)
    return res.json({ error: "wrong login" });
  res.json({ success: true, message: "Logged in " })


}

const Register = model => async (req, res, next) => {

  try {
    const { email, password } = req.body;
    if (email !== '' && password !== '' && password.length >= 8) {

      // create new user but first hash passwords

      const user = new Users({ email: email, password: password });
      user.save(function(err) {
        if (err) {
          console.log(err);
          return;
        }

        res.json({ message: "You have registered successfully", success: true })
      });




    }
    // else 


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
