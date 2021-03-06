'use strict'

const Controller = require('trails-controller')
const Boom = require('boom')

/**
 * @module LoginController
 * @description Generated Trails.js Controller.
 */

module.exports = class AuthController extends Controller{

  login(request, reply) {

    const emailAddress = request.payload.emailAddress
    const password = request.payload.password

    this.app.services.AuthService.login(emailAddress, password)
    .then(user => {
      if (user) {
        request.yar.set('user', user);
        reply.redirect('/')
      }
      else {
        reply.view('Login', {error: 'That email address or password doesn\'t exist.'})
      }
    })
    .catch(err => {
      reply.view('Login', {error: 'That email address or password doesn\'t exist.'})
    })

  }

  logout(request, reply) {
    
    request.yar.clear('user')
    reply.redirect('/')

  }

}
