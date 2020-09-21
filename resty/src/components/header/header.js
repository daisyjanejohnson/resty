// Header component function

import React from 'react';
import { NavLink } from 'react-router-dom'
import './header.scss';  

function Header() {
  return (<header className="App-header">
    <h1 className="headerText">RESTy</h1>
    <nav>
      <ul>
        <li className="nav">
          <NavLink  activeClassName="here" to="/">Home</NavLink>
          </li>
        <li className="nav">
          <NavLink className="nav" activeClassName="here" to="/history">History</NavLink>
          </li>
          <li className="nav">
            <NavLink className="nav"activeClassName="here" to ="/help">Help</NavLink>
          </li>

      </ul>
    </nav>
  </header>);
}

export default Header;