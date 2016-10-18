import React, { PropTypes, Component } from 'react'

import Hexagon from './../atoms/Hexagon'
import EditButton from './../molecules/EditButton'

class Thermostat extends Component {

  render() {

    return (
      <Hexagon
        index={this.props.index}
        size={125}
        temperature={this.props.temperature}>

        <form
          className="thermostat"
          action={`/api/v1/thermostat/${this.props.id}`}
          method="GET">

          <input type="hidden" name="_method" value="PUT"/>

          <fieldset className="temperature">
            <div className="thermostat-name">
              <legend>{this.props.name}</legend>
              <EditButton href={`/edit/thermostat/${this.props.id}`}/>
            </div>
            <input
              value={this.props.temperature}
              id="temperature"
              type="number"
              name="temperature" />
          </fieldset>

          <button type="submit">Update</button>

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
