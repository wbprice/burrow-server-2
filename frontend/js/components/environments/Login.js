'use strict'

import React, { PropTypes, Component } from 'react'

import Login from './../ecosystems/Login'

class Home extends Component {

  render() {
    return (
      <section>
        <Login error={this.props.error} />
      </section>
    )
  }

}

Home.propTypes = {
  error: PropTypes.string
}

export default Home
