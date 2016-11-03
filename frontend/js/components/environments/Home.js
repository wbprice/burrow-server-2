import React, { Component, PropTypes } from 'react'

import Header from './../ecosystems/Header'
import Thermostats from './../ecosystems/Thermostats'
import HomeMenu from './../ecosystems/HomeMenu'

class Home extends Component {

  render() {
    return (
      <section>
        <Header username={this.props.username}/>
          <div className="container">
            <div className="five columns">
              <HomeMenu />
            </div>
            <div className="seven columns">
              <Thermostats thermostats={this.props.thermostats} />
            </div>
          </div>
      </section>
    )
  }

}

Home.propTypes = {
  username: PropTypes.string,
  creatingThermostat: PropTypes.bool,
  thermostats: PropTypes.array
}

export default Home
