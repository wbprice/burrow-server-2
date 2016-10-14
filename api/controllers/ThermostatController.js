'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module ThermostatController
 * @description Generated Trails.js Controller.
 */

module.exports = class ThermostatController extends Controller{

  create(request, reply) {

    const user = request._user
    const emailAddress = user.emailAddress 
    const thermostat = request.payload

    this.app.services.ThermostatService.create(thermostat, emailAddress)
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(Boom.badRequest(error.message))
    })

  }

}

