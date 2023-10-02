import React from 'react'
import {useState } from 'react'
import axios from 'axios'
import "../styles/createCharacter.css"

function CreateCharacter() {

  const [charName, setCharName] = useState()
  const [charClass, setCharClass] = useState()
  const [charRace, setCharRace] = useState()
  const [charAlignment, setCharAlignment] = useState()
  const [charBackground, setCharBackground] = useState()
  const [strength, setStrength] = useState()
  const [dexterity, setDexterity] = useState()
  const [constitution, setConstitution] = useState()
  const [intelligence, setIntelligence] = useState()
  const [wisdom, setWisdom] = useState()
  const [charisma, setCharisma] = useState()
  
  

  const Submit = () => {
    axios.post('http://localhost:3001/createCharacter', {charName, charClass, charRace, charAlignment, charBackground, 
    strength, dexterity, constitution, intelligence, wisdom, charisma })
    .then((characters) => {
      console.log(characters)
    }).catch(err => console.log(err))
  }

  return (
    <>
      <div id="create-char-page">
        <div id="char-options-di" className='char-column'>
          <label for="name-input">Name</label>
          <input name="name-input" type ="text" onChange={(e) => setCharName(e.target.value)} placeholder='Something cool...'/>

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
        </div>

        <div id="char-stats-div" className='char-column'>
          <label for="str-dd">Strength</label>
          <select name="str-dd" onChange={(e) => setStrength(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <label for="dex-dd">Dexterity</label>
          <select name="dex-dd" onChange={(e) => setDexterity(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <label for="con-dd">Constitution</label>
          <select name="con-dd" onChange={(e) => setConstitution(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <label for="int-dd">Intelligence</label>
          <select name="int-dd" onChange={(e) => setIntelligence(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <label for="wis-dd">Wisdom</label>
          <select name="wis-dd" onChange={(e) => setWisdom(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <label for="cha-dd">Charisma</label>
          <select name="cha-dd" onChange={(e) => setCharisma(e.target.value)}>
            <option value = "15">15</option>
            <option value = "14">14</option>
            <option value = "13">13</option>
            <option value = "12">12</option>
            <option value = "10">10</option>
            <option value = "8">8</option>
          </select>

          <div id="finalise-char">
            <button id="finalise-btn" onClick={Submit}>Create Character</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateCharacter
