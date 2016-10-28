import React, { Component, PropTypes } from 'react'

import Header from './../ecosystems/Header'
import ThermostatForm from './../ecosystems/ThermostatForm'
import Thermostats from './../ecosystems/Thermostats'

class Thermostat extends Component {

  render() {

    return (
      <section>
        <Header username={this.props.username}/>
          <div className="container">
            <div className="five columns">
              <ThermostatForm thermostat={
                this.props.thermostats.find(thermostat => {
                  return thermostat.id == this.props.thermostatId
                })
              } />
            </div>
            <div className="seven columns">
              <Thermostats
                creatingThermostat={this.props.creatingThermostat}
                thermostats={this.props.thermostats} />
            </div>
          </div>
      </section>
    )
  }

}

Thermostat.propTypes = {
  username: PropTypes.string,
  thermostats: PropTypes.array,
  thermostatId: PropTypes.number,
  creatingThermostat: PropTypes.bool
}

export default Thermostat
