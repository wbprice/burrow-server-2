'use strict'

const Policy = require('trails-policy')
const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env['JWT_SECRET_KEY']
const Boom = require('boom')

/**
 * @module AuthPolicy
 * @description Policy for validating a passed jwt
 */
module.exports = class AuthPolicy extends Policy {

  auth (request, reply) {

    const token = request.headers.authorization &&
                  request.headers.authorization.replace('Bearer ', '')

    jwt.verify(token, jwtSecretKey, (err, decoded) => {
      if (err) {
        reply(Boom.unauthorized('There was a problem with the signing token'))
      }
      else {
        // Add the decoded token to the request header
        request.headers.jwt = decoded
        reply()
      }

    })

  }

}

