import React, { Component } from 'react'
import { connect } from 'react-redux'

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
    const path = window.location.pathname
    return (
      <nav>
        <a className={isCurrentRoute('dashboard') ? 'active' : null} href="/">Dashboard</a>
        <a className={isCurrentRoute('newQuestion') ? 'active' : null} href="/new">New Question</a>
        <a className={isCurrentRoute('leaderboard') ? 'active' : null} href="/leaderboard">Leaderboard</a>
      </nav>
    )
  }
}

export default Nav
