'use strict'

import React, { PropTypes, Component } from 'react'

import Login from './../ecosystems/Login'
import CreateThermostat from './../ecosystems/CreateThermostat'
import Thermostats from './../ecosystems/Thermostats'
import Sidebar from './../ecosystems/Sidebar'

class Home extends Component {

  render() {
    return (
      <section>
        <Sidebar username={this.props.username}>
          <CreateThermostat />
        </Sidebar>
        <Thermostats thermostats={this.props.thermostats} />
      </section>
    )
  }

}

Home.propTypes = {  
  username: PropTypes.string,
  thermostats: PropTypes.array
}

export default Home
