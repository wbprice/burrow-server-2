import React, { PropTypes, Component } from 'react'

import EditIcon from './../atoms/EditIcon'

class EditButton extends Component {

  render() {
    return (
      <form
        className="icon-button"
        action={this.props.href} method="GET">
          <button>
            <EditIcon />
          </button>
      </form>
    )

  }

}

EditButton.propTypes = {
  href: PropTypes.string
}

export default EditButton
