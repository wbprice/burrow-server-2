import React, { PropTypes, Component } from 'react'

import Hexagon from './../atoms/Hexagon'

class NewThermostatButton extends Component {

  render() {
    return (
      <Hexagon
        index={this.props.index}
        size={112}>
          <div className="temperature">
            <label style={{marginBottom: '.5em'}}>New Thermostat</label>
            <a href="/thermostat/?creatingThermostat=true"
               className="button button-primary">Add</a>
          </div>
      </Hexagon>
    )
  }

}

NewThermostatButton.propTypes = {
  index: PropTypes.number
}

export default NewThermostatButton
