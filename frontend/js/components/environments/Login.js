'use strict'

import React, { PropTypes, Component } from 'react'

import Header from './../ecosystems/Header'
import LoginForm from './../ecosystems/LoginForm'

class Home extends Component {

  render() {
    return (
      <section>
        <Header />
        <div className="container">
          <div className="five columns">
            <LoginForm error={this.props.error} />
          </div>
          <div className="seven columns">
            <p>Marketing material</p>
          </div>
        </div>
      </section>
    )
  }

}

Home.propTypes = {
  error: PropTypes.string
}

export default Home
