import React, { PropTypes, Component } from 'react'

class StackedListItem extends Component {

  render() {
    return (
      <div className="stacked-list-item">
        <label>{this.props.label}</label>
        <span>{this.props.value}</span>
      </div>
    )
  }

}

StackedListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}

export default StackedListItem
