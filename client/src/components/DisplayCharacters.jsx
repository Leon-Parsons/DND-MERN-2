import React from 'react'
import {useEffect, useState } from 'react'
import axios from 'axios'

function DisplayCharacters() {

  const [characters, setCharacters] = useState([]);

    useEffect(() => {
    axios.get('http://localhost:3001/getCharacters')
    .then((characters) => {
      console.log(characters)
      console.log("data retrieved all good")
      setCharacters(characters.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>  
      <div>
        {
          characters.map(character => {
            return <div>
              <h3>
                {character.charName}
                <br></br>
                {character.charClass}
              </h3>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default DisplayCharacters