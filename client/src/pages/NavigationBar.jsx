import { Outlet, Link } from "react-router-dom";

const NavigationBar= () => {
  return (
    <>
    <h1>NavBar logo / name placeholder</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createChar">Create Character</Link>
          </li>
          <li>
            <Link to="/chars">Your Characters</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavigationBar;