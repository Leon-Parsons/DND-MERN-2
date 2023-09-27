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
    required: false
  },
  charAlignment: {
    type: String,
    required: false
  },
  charBackground: {
    type: String,
    required: false
  },
  strength: {
    type: Number,
    required: false
  },
  dexterity: {
    type: Number,
    required: false
  },
  constitution: {
    type: Number,
    required: false
  },
  intelligence: {
    type: Number,
    required: false
  },
  wisdom: {
    type: Number,
    required: false
  },
  charisma: {
    type: Number,
    required: false
  }
});

const CharacterModel = mongoose.model("characters", CharacterSchema);
module.exports = CharacterModel;