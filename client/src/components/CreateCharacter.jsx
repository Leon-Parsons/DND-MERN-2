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
      <input type ="text" onChange={(e) => setCharName(e.target.value)}/>
      <input type ="text" onChange={(e) => setCharClass(e.target.value)}/>
      <button onClick={Submit}>Create Character</button>
    </div>
  )
}

export default CreateCharacter
