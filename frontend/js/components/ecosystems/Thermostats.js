import React, { PropTypes, Component } from 'react'

class Thermostats extends Component {

  render() {

    return (
      <section>
        { this.props.thermostats.map((thermostat, index) => {
            return (
              <section key={index}>
                <pre>Thermostat {thermostat.name}</pre>
              </section>
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
