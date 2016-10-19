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

  /* 
   * A function that unwraps generic post requests from the frontend and uses 
   * the appropriate HTTP verb for the situation.
   */

  postDirector(request, reply) {

    const isFrontend = request.payload && request.payload._frontend

    if (isFrontend) {
      const method = request.payload._method
      if (method === 'post') {
        return this.frontendCreate(request, reply)
      }
      else if (method === 'put') {
        return this.frontendUpdate(request, reply) 
      }
      else if (method === 'del') {
        return this.frontendDestroy(request, reply)
      }
    }

    else {
      this.app.controller.FootprintController.create(request, reply)
    }

  }

  frontendCreate(request, reply) {

    const user = request.yar.get('user')
    const emailAddress = user.emailAddress
    const thermostat = {
      name: request.payload.name,
      temperature: request.payload.temperature
    }

    this.app.services.ThermostatService.create(thermostat, emailAddress)
    .then(() => {
      reply.redirect('/')
    })

  }

  frontendUpdate(request, reply) {

    const user = request.yar.get('user')
    const emailAddress = user.emailAddress
    const thermostat = {
      temperature: request.payload.temperature
    }

    if (request.payload.name) {
      thermostat['name'] = request.payload.name
    }

    this.app.orm.Thermostat.update(
      thermostat,
      { where: {id: request.params.id} }
    ).then(response => {
      reply.redirect('/')
    })

  }

  frontendDestroy(request, reply) {

    const id = parseInt(request.params.id, 10)
    this.app.orm.Thermostat.destroy({where: {id: id}})
    .then(response => {
      reply.redirect('/')
    })

  }

}

