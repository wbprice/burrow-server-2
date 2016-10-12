'use strict'

const Service = require('trails-service')

/**
 * @module UserService
 * @description Service for working with Users and Logins.
 */
module.exports = class UserService extends Service {

  create (userData) {
    return Promise.all([
      this.app.orm.User.create({
        name: userData.name,
        emailAddress: userData.emailAddress
      }),
      this.app.orm.Login.create({
        emailAddress: userData.emailAddress,
        password: userData.password
      })
    ])
  }

}

