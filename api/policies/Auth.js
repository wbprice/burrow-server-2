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

    const user = request.yar.get('user')

    if (user) {
      request._user = user
      reply()
    }
    else {
      reply(Boom.unauthorized())
    }

  }

}

