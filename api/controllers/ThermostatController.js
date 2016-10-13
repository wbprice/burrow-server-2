'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module ThermostatController
 * @description Generated Trails.js Controller.
 */

module.exports = class ThermostatController extends Controller{

  create(request, reply) {

    const thermostat = request.payload
    const emailAddress = request.headers.jwt.emailAddress

    this.app.services.ThermostatService.create(thermostat, emailAddress)
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(Boom.badRequest(error.message))
    })

  }

}

