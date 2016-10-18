import React, { PropTypes, Component } from 'react'

class Profile extends Component {

  render() {
    return (
      <section>
        { this.props.username &&
          <p>Logged in as: <b>{this.props.username}</b>{' '}
             <a href="/logout">Logout</a></p> }
      </section>
    )
  }
      
}

Profile.propTypes = {
  username: PropTypes.string
}

export default Profile
