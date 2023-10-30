import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <div className='nav-title'>
        <h1>Navbar</h1>
      </div>
        <ul>
          <li>
            <a href="/createChar">Create Character</a>
          </li>

          <li>
            <a href="/myChars">Characters</a> 
          </li>
        </ul>
    </nav>
  )
}

export default NavBar;
