const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/AppUsers')

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

app.listen(3001, ()=> {
  console.log("server is running")
})