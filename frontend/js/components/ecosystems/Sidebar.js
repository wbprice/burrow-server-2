import React, { PropTypes, Component } from 'react'

class Sidebar extends Component {

  render() {
    return (
      <section className="sidebar">
        {this.props.children}
      </section>
    )
  }

}

Sidebar.propTypes = {
  children: PropTypes.any
}

export default Sidebar
