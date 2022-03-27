
const mongoose = require('mongoose');
const { Schema } = mongoose;
const Bcrypt = require('bcrypt');
const saltRounds = 10;
// user schema
const userSchema = new Schema({
  username: { type: String, default: "" }, // String is shorthand for {type: String}
  password: { type: String, required: true, minLength: 8 },
  about: String,
  email: { type: String, unique: true },
  token: String


});

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) return next();
  this.password = Bcrypt.hashSync(this.password, saltRounds);
  next();

});
userSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

const User = mongoose.model('User', userSchema);
module.exports = User;
