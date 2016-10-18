'use strict'

import React, { PropTypes, Component } from 'react'

import Login from './../ecosystems/Login'
import CreateThermostat from './../ecosystems/CreateThermostat'
import Thermostats from './../ecosystems/Thermostats.js'

class Home extends Component {

  render() {
    return (
      <section>
        <div className="five columns">
          <CreateThermostat />
        </div>
        <div className="seven columns">
          <Thermostats thermostats={this.props.thermostats} />
        </div>
      </section>
    )
  }

}

Home.propTypes = {
  thermostats: PropTypes.array
}

export default Home
