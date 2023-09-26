const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  charName: {
    type: String,
    required: true
  },
  charClass: {
    type: String,
    required: true
  },
  charRace: {
    type: String,
    required: true
  }
})

const CharacterModel = mongoose.model("characters", CharacterSchema);
module.exports = CharacterModel;