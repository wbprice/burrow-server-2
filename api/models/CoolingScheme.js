'use strict'

const Model = require('trails-model')

/**
 * @module CoolingScheme
 * @description Model for containing information about a cooling scheme.
 */
module.exports = class CoolingScheme extends Model {

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
