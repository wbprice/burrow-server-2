import React, { PropTypes, Component } from 'react'
import Profile from './../organisms/Profile'

class Header extends Component {

  render() {

    return (
      <header className="top-header container">
        <div className="twelve columns">
          <h1>Burrow</h1>
          <Profile username={this.props.username} />
        </div>
      </header>
    )

  }

}

Header.propTypes = {
  username: PropTypes.string
}

export default Header
