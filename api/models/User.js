'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description Model for containing information about a given user.
 */
module.exports = class User extends Model {

  static config () {

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
