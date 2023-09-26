import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
    .then((users) => {
      console.log(users)
      setUsers(users.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1>cat</h1>
      {
        users.map(user => {
          return <div>
            <h3>
              {user.username}
              {user.password}
            </h3>
          </div>
        })
      }
    </div>
  )
}

export default App
