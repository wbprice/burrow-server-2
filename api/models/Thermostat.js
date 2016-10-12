'use strict'

const Model = require('trails-model')

/**
 * @module Thermostat
 * @description Model containing information about a thermostat
 */
module.exports = class Thermostat extends Model {

  static config () {
    return {
      options: {
        classMethods: {
          associate: models => {

            models.Thermostat.belongsTo(models.User)

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

      temperature: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 78
      },

      make: {
        type: Sequelize.STRING,
        defaultValue: 'haier'
      },

      irProtocol: {
        type: Sequelize.STRING,
        defaultValue: 'nec'
      }

    }
  }

}
