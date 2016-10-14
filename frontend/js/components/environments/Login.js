'use strict'

import React, { PropTypes, Component } from 'react'

import Login from './../ecosystems/Login'

class Home extends Component {

  render() {
    return (
      <section>
        <Login />
      </section>
    )
  }

}

Home.propTypes = {
  thermostats: PropTypes.array
}

export default Home
