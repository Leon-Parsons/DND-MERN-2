const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  charName: {
    type: String,
    required: true
  },
  charClass: {
    type: String,
    required: false
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
    type: String,
    required: false
  },
  dexterity: {
    type: String,
    required: false
  },
  constitution: {
    type: String,
    required: false
  },
  intelligence: {
    type: String,
    required: false
  },
  wisdom: {
    type: String,
    required: false
  },
  charisma: {
    type: String,
    required: false
  }
});

const CharacterModel = mongoose.model("characters", CharacterSchema);
module.exports = CharacterModel;