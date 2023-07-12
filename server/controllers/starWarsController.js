const models = require('../models/starWarsModels');

const {Person, Species} = require('../models/starWarsModels');




const starWarsController = {};




starWarsController.getCharacters = (req, res, next) => {

  // Person.find({})

  //   .then((result) => res.locals = result)

  //   .catch((err) => console.log(err.message));


  // next();

};

starWarsController.getSpecies = async (req, res, next) => {
  
  Species.find({})

    .then((result) => res.locals = result)

    .catch((err) => console.log(err.message));


  next();
 
};

starWarsController.getHomeworld = (req, res, next) => {
  // write code here

  next();
};

starWarsController.getFilm = (req, res, next) => {
  // write code here

  next();
};

starWarsController.addCharacter = (req, res, next) => {
  // write code here

  next();
};

module.exports = starWarsController;
