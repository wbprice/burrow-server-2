'use strict'

const Model = require('trails-model')

/**
 * @module CoolingProfile
 * @description Model for containing information about a cooling profile.
 */
module.exports = class CoolingProfile extends Model {

  static config () {

  }

  static schema (app, Sequelize) {
    return {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  }

}
