import React, { PropTypes, Component } from 'react'

class Login extends Component {

  render() {
    return (
      <form
        className="bordered-form"
        method="post"
        action="/login">
        <fieldset>
          <legend>Login to continue</legend>
       
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

          <button 
            className="button-primary"
            type="submit">Sign in</button>

        </fieldset>
      </form>
    )
  }
  
}

export default Login

