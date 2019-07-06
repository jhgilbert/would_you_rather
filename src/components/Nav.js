import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink activeClassName="active" to="/" exact>Dashboard</NavLink>
        <NavLink activeClassName="active" to="/add">New Question</NavLink>
        <NavLink activeClassName="active" to="/leaderboard">Leaderboard</NavLink>
      </nav>
    )
  }
}

export default Nav
