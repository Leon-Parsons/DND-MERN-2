const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/AppUsers')
const CharacterModel = require('./models/CharacterModel')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  'mongodb+srv://root:8190@dnd-data.tta1wo7.mongodb.net/dnd-mern?retryWrites=true&w=majority'
);

//Retrive users data
app.get("/getUsers", (req, res) => {
  UserModel.find({}).then(function(users) {
    res.json(users)
  }).catch(function(err) {
    res.json(err)
  })
})

app.get("/getCharacters", (req, res) => {
  CharacterModel.find({}).then(function(characters) {
    res.json(characters)
  }).catch(function(err) {
    res.json(err)
  })
})

app.post("/createCharacter", async(req, res) => {
  const character = req.body;
  const newCharacter= new CharacterModel(character);
  await newCharacter.save();
  res.json(character);
})

app.listen(3001, ()=> {
  console.log("server is running")
})