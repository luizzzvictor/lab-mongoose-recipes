
const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model.js');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://0.0.0.0:27017/recipe-app';

async function connect() {
  try {
    const dbConnect = await mongoose.connect(MONGODB_URI);
    console.log(`Conectado ao DB: ${dbConnect.connection.name}`);

    await Recipe.deleteMany()

    // iteration 1

    const variavel = await Recipe.create({
      title: "Bolinho de Chuva",
      level: "Easy Peasy",
      ingredients:["Farinha", "Acúcar", "Canela"],
      cuisine: "Brasileira",
      dishType: "snack",
      image: "https://images.media-allrecipes.com/images/75131.jpg",      
      duration: 15,
      creator: "Luiz",
      created: Date(30/11/2022)
    })

    console.log(variavel.title)

    //iteration 2

    const variavel2 = await Recipe.insertMany(data)

    console.log(variavel2[0].title)
    console.log(variavel2[1].title)
    console.log(variavel2[2].title)
    console.log(variavel2[3].title)
    console.log(variavel2[4].title)

    // iteration 3

    await Recipe.findOneAndUpdate({title:"Rigatoni alla Genovese"}, {duration: 100})

    console.log("********Rigatoni alla Genovese updated!")

    //iteration 4

    await Recipe.deleteOne({title:"Carrot Cake"})

    console.log("*********Carrot Cake deleted!")

    //iteration 5

    await mongoose.connection.close()

  } catch (error) {
    console.log(error);
  }
}

connect()

// Connection to the database "recipe-app"
// mongoose
//   .connect(MONGODB_URI)
//   .then(x => {
//     console.log(`Connected to the database: "${x.connection.name}"`);
//     // Before adding any recipes to the database, let's remove all existing ones
//     return Recipe.deleteMany()
//   })
//   .then(() => {   
//    const receita1 = Recipe.create({
//       title: "Bolinho de Chuva",
//       level: "Easy Peasy",
//       ingredients:["Farinha", "Acúcar", "Canela"],
//       cuisine: "Brasileira",
//       dishType: "snack",
//       image: "https://images.media-allrecipes.com/images/75131.jpg",      
//       duration: 15,
//       creator: "Luiz",
//       created: Date(30/11/2022)
//     })

//     const receitas2_5 = Recipe.insertMany(data)
//   })

//   .then(() => {
//     Recipe.findOneAndUpdate({title:"Bolinho de Chuva"}, {duration: 100})
//     Recipe.deleteOne({title:"Carrot Cake"})
//    })



//   .catch(error => {
//     console.error('Error connecting to the database', error);
//   });
