import React, { PropTypes, Component } from 'react'

import Profile from './../organisms/Profile'

class Sidebar extends Component {

  render() {
    return (
      <section className="sidebar">
        <header className="top-header">
          <h1>Burrow</h1> 
          <Profile username={this.props.username} />
        </header>
        {this.props.children}
      </section>
    )
  }

}

Sidebar.propTypes = {
  children: PropTypes.any,
  username: PropTypes.string
}

export default Sidebar
