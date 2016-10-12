'use strict'

const Model = require('trails-model')

/**
 * @module Login
 * @description Model containing login information for a user.
 */
module.exports = class Login extends Model {

  static config () {
  }

  static schema (app, Sequelize) {
    return {
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
  }

}
