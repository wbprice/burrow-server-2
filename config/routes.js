/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.home'
  },

  {
    method: 'GET',
    path: '/thermostat/{id?}',
    handler: 'ViewController.thermostats'
  },

  {
    method: 'GET',
    path: '/login',
    handler: 'ViewController.login'
  },

  {
    method: ['POST'],
    path: '/login',
    handler: 'AuthController.login'
  },

  {
    method: 'GET',
    path: '/logout',
    handler: 'AuthController.logout'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */

  {
    method: ['POST'],
    path: '/api/v1/user',
    handler: 'UserController.create'
  },


  {
    method: ['POST'],
    path: '/api/v1/thermostat',
    handler: 'ThermostatController.postDirector'
  },

  {
    method: ['POST'],
    path: '/api/v1/thermostat/{id}',
    handler: 'ThermostatController.postDirector'
  }

]
