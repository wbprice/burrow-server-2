import React, { Component, PropTypes } from 'react'

import ClockIcon from './../atoms/ClockIcon'

class IconDropdown extends Component {

  render() {
    return (
      <div className="icon-dropdown">
        <label>{this.props.label}</label>
        <div className="row">
          <ClockIcon />
          <select>
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
          </select>
        </div>
      </div>
    )
  }

}

IconDropdown.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  selection: PropTypes.string
}

export default IconDropdown
