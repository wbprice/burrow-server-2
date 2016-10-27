import React, { PropTypes, Component } from 'react'

class Profile extends Component {

  render() {
    return (
      <section className="profile">
        { this.props.username &&
          <span>Logged in as: <b>{this.props.username}</b>{' '}
             <a href="/logout">Logout</a></span> }
      </section>
    )
  }

}

Profile.propTypes = {
  username: PropTypes.string
}

export default Profile
