import React, { PropTypes, Component } from 'react'

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
      </section>
    )
  }

}

Thermostats.propTypes = {
  thermostats: PropTypes.array
}

export default Thermostats
