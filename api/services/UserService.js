'use strict'

const Service = require('trails-service')
const bcrypt = require('bcrypt')

/**
 * @module UserService
 * @description Service for working with Users and Logins.
 */
module.exports = class UserService extends Service {

  create (userData) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(userData.password, 10, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    }).then(hash => {
      return Promise.all([
        this.app.orm.User.create({
          name: userData.name,
          emailAddress: userData.emailAddress
        }),
        this.app.orm.Login.create({
          emailAddress: userData.emailAddress,
          password: hash
        })
      ])
    })

  }

}

