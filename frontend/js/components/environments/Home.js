'use strict'

import React, { PropTypes, Component } from 'react'

import Login from './../ecosystems/Login'
import CreateThermostat from './../ecosystems/CreateThermostat'

class Home extends Component {

  render() {
    return (
      <section>
        <Login />
        <CreateThermostat />
      </section>
    )
  }

}

Home.propTypes = {
  children: PropTypes.any
}

export default Home
