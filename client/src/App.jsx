import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [characters, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/getCharacters')
    .then((characters) => {
      console.log(characters)
      setUsers(characters.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>cat</h1>
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
  )
}

export default App
