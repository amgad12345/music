import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul className = "list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/eminem">eminem</Link>
        </li>
        <li>
          <Link to="/amywinehouse">amywinehouse</Link>
        </li>
        <li>
          <Link to="/thexx">thexx</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar