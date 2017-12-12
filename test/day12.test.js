const assert = require('chai').assert

const day12 = require('../src/day12/day12')

const input = `0 <-> 2
1 <-> 1
2 <-> 0, 3, 4
3 <-> 2, 4
4 <-> 2, 3, 6
5 <-> 6
6 <-> 4, 5`

describe('Digital Plumber Part 1', () => {
  it('shall return 6 programs', () => {
    const result = day12.solvePart1(input)
    assert.equal(result, 6)
  })
})

describe('Digital Plumber Part 2', () => {
  it('shall return 2 groups', () => {
    const result = day12.solvePart2(input)
    assert.equal(result, 2)
  })
})
