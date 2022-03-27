
const mongoose = require('mongoose');
const {Schema} = mongoose;
const Bcrypt = require('bcrypt');
const saltRounds = 10;




  const userSchema = new Schema({
    username:  String, // String is shorthand for {type: String}
    password: String,
    about:   String,
    email:{type:String, unique:true},
   
   
  });

  userSchema.pre('save', function(next){

    if(!this.isModified('password')) return next();
    this.password = Bcrypt.hashSync(this.password,saltRounds);
    next();
    
    
  });
userSchema.methods.comparePassword = function(plaintext, callback) {};

  const User = mongoose.model('User', userSchema);


module.exports = User;
