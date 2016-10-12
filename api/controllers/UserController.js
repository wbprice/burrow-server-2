'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module UserController
 * @description Generated Trails.js Controller.
 */

module.exports = class UserController extends Controller {

  create (request, reply) {

    const userData = request.payload

    this.app.services.UserService.create(userData)
    .then(response => {
      reply(response[0])
    })
    .catch(error => {
      reply(Boom.badRequest('There was an error, that\'s all we know.'))
    })

  }

}

