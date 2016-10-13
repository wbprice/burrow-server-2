'use strict'

const Service = require('trails-service')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env['JWT_SECRET_KEY']

/**
 * @module LoginService
 * @description Service for handling logins.
 */
module.exports = class AuthService extends Service {

  login(emailAddress, password) {

    return this.app.orm.Login.findOne({where: {emailAddress}})
    .then(user => {
      return new Promise((resolve, reject) => {
        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) reject(err)
          resolve(isValid)
        })
      })
    })
    .then(isValid => {
      if (isValid) {
        return jwt.sign({emailAddress}, jwtSecretKey, {
          expiresIn: '1 day'
        })
      }
      else {
        return
      }
    })

  }

}
