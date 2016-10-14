'use strict'

const Service = require('trails-service')
const bcrypt = require('bcrypt')

/**
 * @module LoginService
 * @description Service for handling logins.
 */
module.exports = class AuthService extends Service {

  login(emailAddress, password) {

    return Promise.all([
      this.app.orm.User.findOne({where: {emailAddress}}),
      this.app.orm.Login.findOne({where: {emailAddress}})
    ])
    .then(results => {

      const user = results[0].toJSON()
      const login = results[1].toJSON()

      return new Promise((resolve, reject) => {
        bcrypt.compare(password, login.password, (err, isValid) => {
          if (err) reject(err)

          if (isValid) {
            resolve(user)
          }

          else {
            resolve(false)
          }

        })
      })

    })

  }

}
