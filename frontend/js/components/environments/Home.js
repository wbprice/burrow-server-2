import React, { Component, PropTypes } from 'react'

import ScheduleForm from './../ecosystems/ScheduleForm'
import Thermostats from './../ecosystems/Thermostats'
import Sidebar from './../ecosystems/Sidebar'

class Thermostat extends Component {
  
  render() {

    return (
      <article>
        <Sidebar username={this.props.username}>
          <ScheduleForm />
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
