'use strict'

const Service = require('trails-service')

/**
 * @module ThermostatService
 * @description Service for acting on Thermostat records.
 */
module.exports = class ThermostatService extends Service {

  create(thermostat, emailAddress) {

    return this.app.orm.User.findOne({
      where: {emailAddress},
      include: [{ all: true }]
    })
    .then(user => {
      return this.app.orm.Thermostat.create(thermostat)
      .then(thermostat => {
        return user.addThermostats(
          thermostat
        ).then(() => {
          return thermostat
        })
      })
    })

  }

}

