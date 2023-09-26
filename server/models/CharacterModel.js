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
  },
  charAlignment: {
    type: String,
    required: true
  },
  charBackground: {
    type: String,
    required: true
  },
  strength: {
    type: Number,
    required: true
  },
  dexterity: {
    type: Number,
    required: true
  },
  constitution: {
    type: Number,
    required: true
  },
  intelligence: {
    type: Number,
    required: true
  },
  wisdom: {
    type: Number,
    required: true
  },
  charisma: {
    type: Number,
    required: true
  }
})

const CharacterModel = mongoose.model("characters", CharacterSchema);
module.exports = CharacterModel;