import React from 'react'
import {useState } from 'react'
import axios from 'axios'

function CreateCharacter() {

  const [charName, setCharName] = useState()
  const [charClass, setCharClass] = useState()

  const Submit = () => {
    axios.post('http://localhost:3001/createCharacter', {charName, charClass})
    .then((characters) => {
      console.log(characters)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <label for="name-input">Name</label>
      <input name="name-input" type ="text" onChange={(e) => setCharName(e.target.value)}/>

      <label for="class-dd">Class</label>
      <select name="class-dd" onChange={(e) => setCharClass(e.target.value)}>
        <option value = "Barbarian">Barbarian</option>
        <option value = "Bard">Bard</option>
        <option value = "Cleric">Cleric</option>
        <option value = "Druid">Druid</option>
      </select>

      <button onClick={Submit}>Create Character</button>
    </div>
  )
}

export default CreateCharacter
