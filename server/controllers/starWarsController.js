const models = require('../models/starWarsModels');

const {Person, Species} = require('../models/starWarsModels');




const starWarsController = {};




starWarsController.getCharacters = (req, res, next) => {

  models.Person.find({})
  .exec()
  .then(Characters => {
    console.log(Characters);
    res.locals = Characters;
    next();
  })
  .catch(err => {
    next(err);
  });
};

starWarsController.getSpecies = async (req, res, next) => {
  
  // Species.find({})

    
 
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
