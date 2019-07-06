import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const ROUTES = {
  dashboard: '/',
  newQuestion: '/new',
  leaderboard: '/leaderboard'
}

function isCurrentRoute(routeName) {
  const path = window.location.pathname
  return path === ROUTES[routeName]
}

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
