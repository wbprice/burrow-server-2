import React, { PropTypes, Component } from 'react'

/*
 * Generic form for creating and updating thermostats.
 * If a thermostat id is not provided, assume that this is a new thermostat.
 * Otherwise, update the existing thermostat.
 */

class ThermostatForm extends Component {

  render() {

    let action = '/api/v1/thermostat'
    let legend = 'Create a thermostat'

    if (this.props.thermostat) {
      action = `/api/v1/thermostat/${this.props.thermostat.id}`
      legend = `Edit the ${this.props.thermostat.name} thermostat`
    }

    return (
      <form
        className="bordered-form"
        method="post"
        action={action}>

        <fieldset>
          <legend>{legend}</legend>

          <label htmlFor="name">Name</label>
          <input 
            id="name"
            type="text"
            name="name"
            value={this.props.thermostat && this.props.thermostat.name}
            required
            placeholder="Living Room" />

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

        </fieldset>

        <button 
          className="button-primary"
          type="submit">Submit</button>

      </form>
    )
  }

}

ThermostatForm.propTypes = {
  thermostat: PropTypes.object
}

export default ThermostatForm
