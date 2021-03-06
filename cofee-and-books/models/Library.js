const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const librarySchema = new Schema({
  name: String,
  desc: String,
  image: String,
   
  // Structura tipíca de un GeoJSON
  
  location: {
      type: {
          type: String,
          default: "Point"
      },
      coordinates: [Number]
  }
});

librarySchema.index({location:"2dsphere"});

module.exports = mongoose.model("Library", librarySchema);

