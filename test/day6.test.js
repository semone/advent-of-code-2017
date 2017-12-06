const assert = require('chai').assert

const day6 = require('../src/day6/day6')

describe('Memory Reallocation Part 1', () => {
  it('shall return 5', () => {
    const input = '0\t2\t7\t0'
    const result = day6.solvePart1(input)
    assert.equal(result, 5)
  })
})

describe('Memory Reallocation Part 2', () => {
  it('shall return 10', () => {
    const input = '0\t2\t7\t0'
    const result = day6.solvePart2(input)
    assert.equal(result, 4)
  })
})
