import React from 'react'
import {useState } from 'react'
import axios from 'axios'

function CreateCharacter() {

  const [charName, setCharName] = useState()
  const [charClass, setCharClass] = useState()
  const [charRace, setCharRace] = useState()
  const [charAlignment, setCharAlignment] = useState()
  const [charBackground, setCharBackground] = useState()

  const Submit = () => {
    axios.post('http://localhost:3001/createCharacter', {charName, charClass, charRace, charAlignment, charBackground})
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

      <label for="race-dd">Race</label>
      <select name="race-dd" onChange={(e) => setCharRace(e.target.value)}>
        <option value = "Elf">Elf</option>
        <option value = "Orc">Orc</option>
        <option value = "Human">Human</option>
        <option value = "Tiefling">Tiefling</option>
      </select>

      <label for="alignment-dd">Alignment</label>
      <select name="alignment-dd" onChange={(e) => setCharAlignment(e.target.value)}>
        <option value = "Lawful-Good">Lawful-Good</option>
        <option value = "Lawful-Neutral">Lawful-Neutral</option>
        <option value = "Lawful-Evil">Lawful-Evil</option>
        <option value = "True-Neutral">True-Neutral</option>
      </select>

      <label for="background-dd">Background</label>
      <select name="background-dd" onChange={(e) => setCharBackground(e.target.value)}>
        <option value = "Acolyte">Acolyte</option>
        <option value = "Charlatan">Charlatan</option>
        <option value = "Criminal">Criminal</option>
        <option value = "Entertainer">Entertainer</option>
      </select>

      <button onClick={Submit}>Create Character</button>
    </div>
  )
}

export default CreateCharacter
