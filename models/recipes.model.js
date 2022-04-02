
const mongoose = require('mongoose');
const {Schema} = mongoose;


const recipeSchema = new Schema({
  title:{type:String,minLength:8},
  description:String,
  steps:{type:Array, default:null},
  ingredients:[],
  image:String,
  user:Object,
  views:{type:Array, default:[]},
  likes:{type:Array, default:[]},
  comments:[],
  
  
  
},{timestamps:true})
const Recipe = mongoose.model("Recipe",recipeSchema);
/* const Recipes = [

        { id:"12345",
          title: "ipsum dolor ",
          views:23,
          likes:10,
         

          description:"Lorem ipsum dolor sit amet, h. Aliquam aliquam sem nisi, in maximus orci semper vel. Aliquam convallis mollis orci, id scelerisque sapien imperdiet sed.",
          steps:[],
          ingredients:[
          {name:"Clove", image:"https://i.etsystatic.com/27776756/r/il/dd30d0/3373976766/il_794xN.3373976766_2v8t.jpg"}
            ,
            {name:"Chia seed", image:"https://i.etsystatic.com/12292559/r/il/1ca19e/3143153665/il_794xN.3143153665_9p50.jpg"}

          ],
          image:"https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },

          {
            id:"23456",

          title: "Donec mollis imperdiet",
          views:253,
          likes:60,
          description:"Lorem ipsum dolor sit amet,uam convallis mollis orci, id scelerisque sapien imperdiet sed.",
          steps:[],
          ingredients:[{name:"Basil", image:""}],
          image:"https://images.pexels.com/photos/7525182/pexels-photo-7525182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }

        ,  {
          id:"34567",
          title: "folor sit amet ",
          views:239,
          likes:40,
          description:"Lorem ipsum dolor sit amet, nisi, in maximus orci semper vel. Aliquam convallis mollis orci, id scelerisque sapien imperdiet sed.",
          steps:[],
           ingredients:[{name:"Tumeric", image:""}],
          image:"https://images.pexels.com/photos/6287298/pexels-photo-6287298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }

    ]*/

module.exports = Recipe;
