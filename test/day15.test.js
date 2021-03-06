const assert = require('chai').assert

const day15 = require('../src/day15/day15')

const input = [65, 8921]

describe('Dueling Generators Part 1', () => {
  it('shall return correct final count', () => {
    const result = day15.solvePart1(input)
    assert.equal(result, 588)
  }).timeout(10000)
})

describe('Dueling Generators Part 2', () => {
  it('shall return correct final count', () => {
    const result = day15.solvePart2(input)
    assert.equal(result, 309)
  }).timeout(10000)
})
