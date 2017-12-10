const assert = require('chai').assert

const day10 = require('../src/day10/day10')

describe('Knot Hash Part 1', () => {
  it('shall return sublist', () => {
    const result = day10.getNewList([0, 1, 2, 3, 4], 0, 3)
    assert.deepEqual(result, [2, 1, 0, 3, 4])
  })

  it('shall return sublist', () => {
    const result = day10.getNewList([2, 1, 0, 3, 4], 3, 4)
    assert.deepEqual(result, [4, 3, 0, 1, 2])
  })

  it('shall return sublist', () => {
    const result = day10.getNewList([4, 3, 0, 1, 2], 1, 5)
    assert.deepEqual(result, [3, 4, 2, 1, 0])
  })

  it('shall return sublist', () => {
    const result = day10.solvePart1('3,4,1,5', 5)
    assert.equal(result, 12)
  })
})

describe('Knot HashPart 2', () => {
  it('shall return ascii', () => {
    const result = day10.createAsciiSequence('1,2,3')
    assert.equal(result, '49,44,50,44,51,17,31,73,47,23')
  })

  it('shall return hash', () => {
    const result = day10.solvePart2('1,2,3', 256)
    assert.equal(result, '3efbe78a8d82f29979031a4aa0b16a9d')
  })
})
