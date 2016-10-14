import React, { PropTypes, Component } from 'react'

class CreateThermostat extends Component {

  render() {
    return (
      <form
        method="post"
        action="/api/v1/thermostat">

        <fieldset>
          <legend>Create a thermostat</legend>

          <label htmlFor="name">Name</label>
          <input 
            id="name"
            type="text"
            name="name"
            placeholder="Living Room" />

        </fieldset>
      </form>
    )
  }

}

export default CreateThermostat
