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
            <option value="home">Home</option>
            <option value="work" selected>Work</option>
            <option value="coffeeshop">Coffeeshop</option>
            <option vlaue="sleeping">Sleeping</option>
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
