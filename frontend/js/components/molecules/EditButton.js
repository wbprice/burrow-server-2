import React, { PropTypes, Component } from 'react'

import EditIcon from './../atoms/EditIcon'

class EditButton extends Component {

  render() {
    return (
      <a href={this.props.href}>
        <EditIcon />
      </a>
    )

  }

}

EditButton.propTypes = {
  href: PropTypes.string
}

export default EditButton
