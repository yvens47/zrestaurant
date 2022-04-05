const mongoose = require('mongoose');
require('dotenv').config();

// connect to database




async function main(){
  await mongoose.connect(`mongodb+srv://${process.env.dbusername}:${process.env.dbpassword}@cluster0.sjcbu.mongodb.net/zrestaurant?retryWrites=true&w=majority`);
};


module.exports =main;
