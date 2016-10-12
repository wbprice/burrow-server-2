'use strict'
/* global describe, it */

const assert = require('assert')

describe('Login Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Login'])
  })
})
