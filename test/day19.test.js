const input = `    |
    |  +--+
    A  |  C
F---|----E|--+
    |  |  |  D
    +B-+  +--+`

const assert = require('chai').assert

const day19 = require('../src/day19/day19')

describe('A Series of Tubes Part 1', () => {
  it('shall return the letters visited', () => {
    const result = day19.solve(input)
    assert.equal(result[0], 'ABCDEF')
  })
})

describe('A Series of Tubes Part 2', () => {
  it('shall return the number of steps', () => {
    const result = day19.solve(input)
    assert.equal(result[1], 38)
  })
})
