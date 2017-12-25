const input = `0/2
2/2
2/3
3/4
3/5
0/1
10/1
9/10`

const assert = require('chai').assert

const day24 = require('../src/day24/day24')

describe('Electromagnetic Moat Part 1', () => {
  it('shall return max value', () => {
    const result = day24.solve(input)
    assert.equal(result[0], 31)
  })
})

describe('Electromagnetic Moat Part 2', () => {
  it('shall return max value for max length ', () => {
    const result = day24.solve(input)
    assert.equal(result[1], 19)
  })
})
