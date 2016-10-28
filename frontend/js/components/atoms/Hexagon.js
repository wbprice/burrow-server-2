import React, { PropTypes, Component } from 'react'

import colors from './../util/colors'

class Hexagon extends Component {

  getBackgroundColor(temperature) {

    if (temperature >= 68 && temperature < 72) {
      return colors.blue
    }
    else if (temperature >= 72 && temperature < 76) {
      return colors.green
    }
    else if (temperature >= 76 && temperature < 80) {
      return colors.orange
    }
    else if (temperature >= 80) {
      return colors.red
    }
    else {
      return colors.lightgray
    }

  }

  getDimensions(size) {

    const height = size * 2
    const verticalDistance = height * (3 / 4)

    const width = (Math.sqrt(3) / 2) * height
    const horizontalDistance = width

    return {
      height,
      verticalDistance,
      width,
      horizontalDistance
    }

  }

  render() {

    const hexDimensions = this.getDimensions(this.props.size)

    const containerStyle = {
      width: hexDimensions.width,
      height: hexDimensions.height,
      position: 'relative',
      display: 'flex',
      flexDirection: 'horizontal',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: -hexDimensions.height / 4 + 12,
      marginLeft: this.props.index % 2 !== 0 ? hexDimensions.width / 2 : 0
    }

    const svgStyle = {
      position: 'absolute',
      zIndex: -1
    }

    const hexStyle = {
      fill: this.getBackgroundColor(this.props.temperature),
      fillOpacity: 1,
      fillRule: 'evenodd',
      stroke: '#01212b',
      strokeWidth: '16',
      strokeLinecap: 'butt',
      strokeLinejoin: 'miter',
      strokeMiterlimit: 4,
      strokeDasharray: 'none',
      strokeOpacity: 1
    }

    return (
      <section style={containerStyle}>

        <svg
           version="1.1"
           id="svg2"
           viewBox="0 0 300.51084 347.00001"
           style={svgStyle}
           height="100%"
           width="100%">
          <g
             transform="translate(-2.5656027e-6,-705.36224)"
             id="layer1">
            <path
               d="M 150.25542,1042.6842 8.3814396,960.77323 8.3814352,796.95127 150.25541,715.04028 l 141.87398,81.91098 10e-6,163.82196 z"
               id="path3338"
               style={hexStyle} />
          </g>
        </svg>

        {this.props.children}

      </section>
    )

  }

}

Hexagon.propTypes = {
  size: PropTypes.number,
  temperature: PropTypes.number,
  children: PropTypes.any,
  index: PropTypes.number
}

export default Hexagon
