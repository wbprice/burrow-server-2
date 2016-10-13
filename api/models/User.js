'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description Model for containing information about a given user.
 */
module.exports = class User extends Model {

  static config () {
    return {
      options: {
        classMethods: {
          associate: models => {
            models.User.hasMany(models.Thermostat, {as: 'Thermostats'})
            models.User.hasMany(models.CoolingProfile, {as: 'CoolingProfiles'})
          }
        }
      }
    }
  }

  static schema (app, Sequelize) {
    return {

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false
      }

    }
  }

}
