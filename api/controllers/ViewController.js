'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  home (request, reply) {
    const user = request.yar.get('user')
    if (user) {
      this.app.orm.Thermostat.findAll({where: {UserId: user.id}})
      .then(thermostats => {
        reply.view('Home', {
          thermostats: thermostats,
          username: user.name
        })
      })
    }
    // Else, redirect to login screen.
    else {
      reply.redirect('/login')
    }
  }

  thermostats (request, reply) {

    const user = request.yar.get('user')
    if (user) {
      const id = request.params.id
      this.app.orm.Thermostat.findAll({where: {UserId: user.id}})
      .then(thermostats => {
        reply.view('Thermostat', {
          thermostats: thermostats,
          thermostatId: id,
          username: user.name,
          creatingThermostat: request.query.creatingThermostat
        })
      })
    }
    // Else, redirect to login screen.
    else {
      reply.redirect('/login')
    }
  }

  login (request, reply) {
    const user = request.yar.get('user')
    if (user) {
      reply.view('login', {username: user.name})
    }
    else {
      reply.view('login')
    }
  }

}
