import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CreateCharacter from './components/CreateCharacter';
// import CharacterCreator from "./components/CreateCharacter";

function App() {

  const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/getCharacters')
  //   .then((characters) => {
  //     console.log(characters)
  //     console.log("data retrieved all good")
  //     setCharacters(characters.data)
  //   }).catch(err => console.log(err))
  // }, [])

  return (
    <>
      <div>
        <CreateCharacter/>
        {/* {
          characters.map(character => {
            return <div>
              <h3>
                {character.charName}
                <br></br>
                {character.charClass}
              </h3>
            </div>
          })
        } */}
      </div>
    </>
  )
}

export default App
