'use strict'

import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import LoginForm from './../ecosystems/LoginForm'
import Hexagon from './../atoms/Hexagon'

class Home extends Component {

  render() {
    return (
      <section>
        <Header username={this.props.username} />
        <div className="container">
          <div className="five columns">
            <LoginForm error={this.props.error} />
          </div>
          <div className="seven columns">
            <div className="thermostats">
              <Hexagon index={0} size={112} />
              <Hexagon index={1} size={112} />
              <Hexagon index={2} size={112} />
            </div>
          </div>
        </div>
      </section>
    )
  }

}

Home.propTypes = {
  error: PropTypes.string,
  username: PropTypes.string
}

export default Home
