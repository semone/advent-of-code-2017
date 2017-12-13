const assert = require('chai').assert

const day13 = require('../src/day13/day13')

const input = `0: 3
1: 2
4: 4
6: 4`

describe('Packet Scanners Part 1', () => {
  it('shall return correct serverity', () => {
    const result = day13.solvePart1(input)
    assert.equal(result, 24)
  })
})

describe('Packet Scanners Part 2', () => {
  it('shall return correct safety delay', () => {
    const result = day13.solvePart2(input)
    assert.equal(result, 10)
  })
})
