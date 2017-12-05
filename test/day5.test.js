const assert = require('chai').assert

const day5 = require('../src/day5/day5')

describe('A Maze of Twisty Trampolines, All Alike Part 1', () => {
  it('shall return 5', () => {
    const input = '0\n3\n0\n1\n-3'
    const result = day5.solvePart1(input)
    assert.equal(result, 5)
  })
  it('shall return 3', () => {
    const input = '1\n2\n3\n4\n5'
    const result = day5.solvePart1(input)
    assert.equal(result, 3)
  })
})

describe('A Maze of Twisty Trampolines, All Alike Part 2', () => {
  it('shall return 10', () => {
    const input = '0\n3\n0\n1\n-3'
    const result = day5.solvePart2(input)
    assert.equal(result, 10)
  })
})
