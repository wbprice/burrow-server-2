'use strict'

const Model = require('trails-model')

/**
 * @module Thermostat
 * @description Model containing information about a thermostat
 */
module.exports = class Thermostat extends Model {

  static config () {

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
      }
    }
  }

}
