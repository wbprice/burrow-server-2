import React, { PropTypes, Component } from 'react'

import colors from './../util/colors'

class HR extends Component {

  render() {
    return (
      <div style={{
        backgroundColor: this.props.color || colors.darkgray,
        height: 3,
        width: '100%',
        marginBottom: 12
      }}></div>
    )
  }

}

HR.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number
}

export default HR
