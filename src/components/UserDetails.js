import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetails extends Component {

  render() {
    const { user } = this.props

    return (
      <div>
        <img alt={'avatar for ' + user.name} style={{width: '75px', height: '75px'}} src={user.avatarURL} />
        <br />
        {user.name}
      </div>
    )
  }

}

function mapStateToProps({ users }, { username }) {
  const user = users[username]

  return {
    user
  }

}

export default connect(mapStateToProps)(UserDetails)
