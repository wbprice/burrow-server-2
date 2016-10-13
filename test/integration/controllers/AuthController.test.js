'use strict'
/* global describe, it */

const assert = require('assert')

describe('LoginController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['LoginController'])
  })
})
