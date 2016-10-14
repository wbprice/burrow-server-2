'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  home (request, reply) {
    // If user is logged in, populate the list of thermostats.
    const user = request.yar.get('user')
    if (user) {
      this.app.orm.Thermostat.findAll({where: {UserId: user.id}})
      .then(thermostats => {
        reply.view('Home', {thermostats: thermostats})
      })
    }
    // Else, redirect to login screen.
    else {
      reply.view('Login')
    }
  }

  

}
