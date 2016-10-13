'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module LoginController
 * @description Generated Trails.js Controller.
 */

module.exports = class AuthController extends Controller{

  login(request, reply) {

    const emailAddress = request.payload.emailAddress
    const password = request.payload.password

    this.app.services.AuthService.login(emailAddress, password)
    .then(jwt => {
      if (jwt) {
        reply({jwt})
      }
      else {
        reply(Boom.unauthorized('Bad username or password.'))
      }
    })
    .catch(err => {
      reply(Boom.badRequest('There was an error.  That\'s all we know'))
    })

  }

}
