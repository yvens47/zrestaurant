const mongoose = require("mongoose");
const { Schema } = mongoose;
const Bcrypt = require("bcrypt");
const saltRounds = 10;
// user schema
const userSchema = new Schema({
  username: { type: String, default: "" }, // String is shorthand for {type: String}
<<<<<<< HEAD
  fullname:String,
  password: { type: String, required: true, minLength: 8 },
  about: { type: String, default: "" },
  email: { type: String, unique: true },
  token: String,
  profile:String

}, {timestamps:true});
=======
  fullname:{type:String,default:""},
  password: { type: String, required: [true,"Password is required"], minLength: 8 },
  about: {type:String,default:""},
  email: { type: String, unique: true },
  token: String,
  profile:{Type:String, default:""}
  


},{timestamps:true});
>>>>>>> e95ecca17d2303af5533099b798a90c22065b83c

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = Bcrypt.hashSync(this.password, saltRounds);
  next();
});

<<<<<<< HEAD
userSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
=======

userSchema.methods.comparePassword = async function(plaintext) {
  return await Bcrypt.compareSync(plaintext, this.password);
>>>>>>> e95ecca17d2303af5533099b798a90c22065b83c
};
userSchema.methods.passwordChangedAfter = async function(jwtTimeStamp){
  if(this.updatedAt){
    const changeTimeStamp = parseInt(this.updatedAt.getTime()/100,10);

    return jwtTimeStamp < changeTimeStamp;
  }

  return false;
  
  
}

const User = mongoose.model("User", userSchema);
module.exports = User;
