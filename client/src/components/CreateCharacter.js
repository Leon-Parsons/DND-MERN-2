import React from 'react'

function CreateCharacter() {

  const [charName, setCharName] = useState()
  const [charClass, setCharClass] = useState()

  const Submit = () => {
    axios.get('http://localhost:3001/createCharacter')
    .then((characters) => {
      console.log(characters)
    }).catch(err => console.log(err))
  }

  return (
    <div>
      <input type ="text" onchange={(e) => setCharName(e.target.value)}/>
      <input type ="text" onchange={(e) => setCharClass(e.target.value)}/>
      <button onclick={submit}>Create Character</button>
    </div>
  )
}

export default CreateCharacter
