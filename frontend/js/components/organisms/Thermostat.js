import React, { PropTypes, Component } from 'react'

import Hexagon from './../atoms/Hexagon'
import EditButton from './../molecules/EditButton'

class Thermostat extends Component {

  render() {

    return (
      <Hexagon
        index={this.props.index}
        size={112}
        temperature={this.props.temperature}>

        <form
          className="thermostat"
          action={`/api/v1/thermostat/${this.props.id}`}
          method="post">

          <input type="hidden" name="_method" value="put"/>
          <input type="hidden" name="_frontend" value="true" />

          <fieldset className="temperature">
            <legend>{this.props.name}</legend>
            <input
              value={this.props.temperature}
              id="temperature"
              type="number"
              name="temperature" />
          </fieldset>

          <a
            className="button"
            href={`/thermostat/${this.props.id}`}>
            Edit
          </a>

        </form>

      </Hexagon>
    )
  }

}

Thermostat.propTypes = {
  name: PropTypes.string,
  temperature: PropTypes.number,
  index: PropTypes.number,
  id: PropTypes.number,
  index: PropTypes.number
}

export default Thermostat
