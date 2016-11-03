import React, { PropTypes, Component } from 'react'
import colors from './../util/colors'

import CloseIcon from './../atoms/CloseIcon'

class CloseButton extends Component {

  render() {
    return (
      <a className="icon-button close-button" href={this.props.href}>
        <CloseIcon color={colors.darkGray} />
      </a>
    )

  }

}

CloseButton.propTypes = {
  href: PropTypes.string
}

export default CloseButton
