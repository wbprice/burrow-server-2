import React, { Component, PropTypes } from 'react'

import IconDropdown from './../molecules/IconDropdown'

class Schedule extends Component {

  render() {
    return (
      <section className="bordered-form">
        <form 
          action=""
          method="post">

          <IconDropdown label="Cooling Profile" />

        </form>
      </section>
    )
  }

}

Schedule.propTypes = {}

export default Schedule

