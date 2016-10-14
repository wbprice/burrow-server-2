'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  home (request, reply) {
    reply.view('Home')
  }

}
