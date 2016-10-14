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

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: ['POST'],
    path: '/api/v1/user',
    handler: 'UserController.create'
  },

  {
    method: ['POST'],
    path: '/login',
    handler: 'AuthController.login'
  },

  {
    method: ['POST'],
    path: '/api/v1/thermostat',
    handler: 'ThermostatController.create'
  }

]
