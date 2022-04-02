
const jwt = require('jsonwebtoken');
const {promisify} = require('util')
// import users model
const Users = require("../models/users.model");
const Bcrypt = require('bcrypt');
//const cookieParser = require('cookie-parser');




// login user
Login = model => async (req, res, next) => {


  
  try {
    const { email, password } = req.body;
    if (!email || !password) return next(new Error("Please provide email and password"));

    // find user by email
    const user = await Users.findOne({ email: email }).exec();

    // check user and password are correct
    if (!user || !await user.comparePassword(password)) {
      return next(new Error("incorrect username and password"));
    }


    // session and jwt
    const { _id, about, username } = user;
    const token = jwt.sign({ id: _id }, "secret", { expiresIn: '7d' });
    res.cookie("jwt",token,{ expires: new Date(Date.now() + 900000), httpOnly: true })

    res.json(
      { token, data: { isLogged: true, success: true, message: "Logged in " }, user: { email, _id, about, username } });



  } catch (e) {
   
   return next(new Error("Error"));


  }



}

// signup users

Register = model => async (req, res, next) => {

  try {
    const { email, password } = req.body;
    if (email !== '' && password !== '' && password.length >= 8) {

      // check if user already existed
      const oldUser = await Users.findOne({ email: email });
      if (oldUser) return res.json({ message: "Account already existed" });
      // create new user but first hash passwords
      const user = new Users({ email: email, password: password });
      user.save(function(err) {
        if (err) {

          // type of error
          let errorMsg = '';
          if (err.code == 11000 && err.keyPattern.email == 1) {
            errorMsg = "Email already registered";
          }
          return res.json({ error: errorMsg });
        }
        //  jwt
        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: '7d' });
        console.log(token);

        res.json({ token: token, message: "You have registered successfully", success: true })
      });




    }
    // else 
    else {
      return res.json({ message: "Email and password must not be empty." })
    }

  } catch (e) {
    console.log(e);
    return next(e);
  };


}
Authenticated = async (req, res, next)=>{

try{

 
  const token = req.cookies.jwt;  
  //console.log(token.split('=')[1]);
  if(!token) { 
    
    return next(new Error("You are not login"))
  };
  const tokenData = jwt.verify(token,'secret'); 

  const user = await Users.findById(tokenData.id);  
  if(!user) return next(new Error("Token for this user no longer exist"));
  //console.log("authenticated");
  user.password = undefined;

  // check if user change password and compare the updatedAt  to JWT timestamp; jwttimestamp < updatedAt; ask the user log gin again.

 // if(user.passwordChangedAfter(tokenData.iat)){
 //    return next(new Error("Password recently changed! Please login"));
 // }


  req.user = user;
  
  return next();
  
}
  catch(error){
    console.log(error);
  }


  
}

exports.login = Login(Users);
exports.register = Register(Users);
exports.authenticate = Authenticated;