import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CreateCharacter from './components/CreateCharacter';
// import CharacterCreator from "./components/CreateCharacter";

function App() {
  
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
      <CreateCharacter/>
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
      {/* <input type ="text" onChange={(e) => setCharName(e.target.value)}/>
      <input type ="text" onChange={(e) => setCharClass(e.target.value)}/>
      <button onClick={Submit}>Create Character</button> */}
    </div>
  )
}

export default App
