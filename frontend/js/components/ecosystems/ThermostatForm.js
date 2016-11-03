import React, { PropTypes, Component } from 'react'

/*
 * Generic form for creating and updating thermostats.
 * If a thermostat id is not provided, assume that this is a new thermostat.
 * Otherwise, update the existing thermostat.
 */

import HR from './../atoms/HR'
import CloseButton from './../molecules/CloseButton'

class ThermostatForm extends Component {

  render() {

    let action = '/api/v1/thermostat'
    let legend = 'Create a thermostat'

    if (this.props.thermostat) {
      action = `/api/v1/thermostat/${this.props.thermostat.id}`
      legend = `Edit the ${this.props.thermostat.name} thermostat`
    }

    return (
      <section className="bordered-form">
        <form
          method="post"
          action={action}>

          <fieldset>
            <legend>{legend}</legend>

            <CloseButton href="/" />

            <input type="hidden" name="_frontend" value="true" />
            <input type="hidden" name="_method" value={
              this.props.thermostat ? 'put' : 'post'
            } />

            <label htmlFor="temperature">Temperature</label>
            <input
              id="temperature"
              type="number"
              name="temperature"
              min="68"
              max="84"
              value={this.props.thermostat && this.props.thermostat.temperature}
              required
              placeholder="78" />

            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.props.thermostat && this.props.thermostat.name}
              required
              placeholder="Living Room" />

          </fieldset>

          <button
            className="button-primary"
            type="submit">Submit</button>

        </form>

        {
          this.props.thermostat &&
            <form
              method="post"
              action={`/api/v1/thermostat/${this.props.thermostat.id}`}>

              <input type="hidden" name="_frontend" value="true" />
              <input type="hidden" name="_method" value="del" />

              <HR />

              <button
                className="button-warning"
                type="submit">Delete</button>

            </form>
        }
      </section>
    )
  }

}

ThermostatForm.propTypes = {
  thermostat: PropTypes.object
}

export default ThermostatForm
