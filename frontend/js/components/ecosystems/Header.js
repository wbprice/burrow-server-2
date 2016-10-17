import React, { PropTypes, Component } from 'react'

class Header extends Component {

  render() {

    return (
      <header className="top-header">
        <div className="container">
          <div className="twelve columns">
            <h1>Burrow</h1>
          </div>
        </div>
      </header>
    )

  }

}

Header.propTypes = {}

export default Header
