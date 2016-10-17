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

  findOrUpdate(request, reply) {

    const method = request.query && request.query._method
    const id = request.params.id

    // Treat this as a regular find
    if (!method) {
      this.app.orm.Thermostat.findOne({where: {id}})
      .then(thermostat => {
        reply(thermostat)
      })
      .catch(error => {
        reply(Boom.badRequest(error.message))
      })
    }

    else {
    
      this.app.orm.Thermostat.update(
        {temperature: request.query.temperature},
        {where: {id}}
      )
      .then(thermostat => {
        reply.redirect('/')
      })
      .catch(error => {
        reply(Boom.badRequest(error.message))
      })
    }

  }

}

