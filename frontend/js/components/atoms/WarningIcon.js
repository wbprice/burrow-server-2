import React, { PropTypes, Component } from 'react'

class WarningIcon extends Component {

  render() {
    return (
      <svg fill={`${this.props.color || '#000'}`} height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
    )
  }

}

WarningIcon.propTypes = {
  color: PropTypes.string
}

export default WarningIcon
