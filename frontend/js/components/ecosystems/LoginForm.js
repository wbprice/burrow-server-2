import React, { PropTypes, Component } from 'react'

import Sidebar from './../ecosystems/Sidebar'

class LoginForm extends Component {

  render() {
    return (
      <Sidebar>
        <form
          className="bordered-form"
          method="post"
          action="/login">
          <fieldset>
            <legend>Login to continue</legend>
            {
              this.props.error &&
              <label className="errortext">{this.props.error}</label>
            }

            <label htmlFor="emailAddress">Email</label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              placeholder="Email" />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password" />

          </fieldset>

          <button
            className="button-primary"
            type="submit">Sign in</button>

        </form>
      </Sidebar>
    )
  }

}

LoginForm.propTypes = {
  error: PropTypes.string
}

export default LoginForm
