const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://imnallay:uqyaBptyOBpmRPdX@cluster0.3oi3yam.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'b=starwars'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const speciesSchema = new Schema({
  name: String,
  classification: String,
  average_height: String,
  average_lifespan: String,
  hair_colors: String,
  skin_colors: String,
  eye_colors: String,
  language: String,
  homeworld: String,
  homeworld_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }
});


// sets a schema for the 'species' collection
const planetSchema = new Schema({
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: Number,
});

const filmSchema = new Schema({
  title: String,
  episode_id: Number,
  director: String,
  release_date: Date,
  opening_crawl: String,
});

const personSchema = new Schema({
  name: String,
  height: Number,
  mass: Number,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: {
    type: Schema.Types.ObjectId,
    ref: 'planet'
  },
  species: {
    type: Schema.Types.ObjectId,
    ref: 'species'
  },
  films: [{
    type: Schema.Types.ObjectId,
    ref: 'film'
  }]
});

const Species = mongoose.model('species', speciesSchema);
const Planet = mongoose.model('planet', planetSchema);
const Film = mongoose.model('film', filmSchema);
const Person = mongoose.model('person', personSchema);

module.exports = {
  Species,
  Planet,
  Film,
  Person
};
