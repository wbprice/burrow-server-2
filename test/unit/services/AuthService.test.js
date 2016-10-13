'use strict'
/* global describe, it */

const assert = require('assert')

describe('LoginService', () => {
  it('should exist', () => {
    assert(global.app.api.services['LoginService'])
  })
})
