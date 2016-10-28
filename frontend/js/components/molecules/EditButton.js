import React, { PropTypes, Component } from 'react'
import colors from './../util/colors'

import EditIcon from './../atoms/EditIcon'

class EditButton extends Component {

  render() {
    return (
      <a className="icon-button" href={this.props.href}>
        <EditIcon color={colors.paleyellow} />
      </a>
    )

  }

}

EditButton.propTypes = {
  href: PropTypes.string
}

export default EditButton
