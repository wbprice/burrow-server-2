import React, { Component, PropTypes } from 'react'

import ThermostatForm from './../ecosystems/ThermostatForm'
import Thermostats from './../ecosystems/Thermostats'
import Sidebar from './../ecosystems/Sidebar'

class Thermostat extends Component {
  
  render() {

    return (
      <article>
        <Sidebar username={this.props.username}>
          <ThermostatForm thermostat={
            this.props.thermostats.find(thermostat => {
              return thermostat.id == this.props.thermostatId
            })
          } />
        </Sidebar>
        <Thermostats thermostats={this.props.thermostats} />
      </article>
    )
  } 

}

Thermostat.propTypes = {
  username: PropTypes.string,
  thermostats: PropTypes.array,
  thermostatId: PropTypes.number
}

export default Thermostat
