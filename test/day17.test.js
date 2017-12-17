const assert = require('chai').assert

const day17 = require('../src/day17/day17')

const input = 3

describe('Spinlock Part 1', () => {
  it('shall return correct final count', () => {
    const result = day17.solvePart1(input)
    assert.equal(result, 638)
  })
})
