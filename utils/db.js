const mongoose = require('mongoose');

// connect to database



async function main(){
  await mongoose.connect('mongodb+srv://jyvenspierre:yvenstij43gt@cluster0.sjcbu.mongodb.net/zrestaurant?retryWrites=true&w=majority');
};


module.exports =main;
