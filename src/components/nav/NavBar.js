
import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router";


export const NavBar = () => {

const history = useHistory();  

  return (
    <nav className="nav__flex">
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/movies">Phase 1</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/phase2">Phase 2</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/reading_list">Reading List</Link>
        </li>
        <li className="nav__item">
          <button className="nav__button" onClick={() => {
            sessionStorage.removeItem("mcco_user");
            history.push("/login")
        }}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}