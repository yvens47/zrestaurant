
// import users model
const Users = require("../models/users.model");


const Login = model=> async(req, res, next)=>{
  const {email} = req.body;
  const found = model.filter((user)=>user.email ===email)[0];
  // user not found redirect back to login
  if(!found)
    return res.json({error:"wrong login"});
  res.json({success:true, message:"Logged in "})


}

const Register = model =>async(req, res, next)=>{

  console.log("Signup");


}


const login = Login(Users);
const register = Register(Users);


module.exports = UserController={
  login:login
}
