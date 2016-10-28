import React, { PropTypes, Component } from 'react'

import NewThermostatButton from './../organisms/NewThermostatButton'
import Thermostat from './../organisms/Thermostat'

class Thermostats extends Component {

  render() {

    return (
      <section>
        { this.props.thermostats.map((thermostat, index) => {
          return (
            <Thermostat
              key={index}
              index={index}
              name={thermostat.name}
              temperature={thermostat.temperature}
              id={thermostat.id} />
          )
          })
        }

        <NewThermostatButton index={this.props.thermostats.length} />

      </section>
    )
  }

}

Thermostats.propTypes = {
  thermostats: PropTypes.array
}

export default Thermostats
