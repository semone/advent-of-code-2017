const assert = require('chai').assert

const day2 = require('../src/day03/day3')

describe('Spiral Memory Part 1', () => {
  it('shall return 0', () => {
    const input = 1
    const result = day2.solvePart1(input)
    assert.equal(result, 0)
  })

  it('shall return 3', () => {
    const input = 12
    const result = day2.solvePart1(input)
    assert.equal(result, 3)
  })

  it('shall return 2', () => {
    const input = 23
    const result = day2.solvePart1(input)
    assert.equal(result, 2)
  })

  it('shall return 1024', () => {
    const input = 1024
    const result = day2.solvePart1(input)
    assert.equal(result, 31)
  })
})

describe('Spiral Memory Part 2', () => {
  it('shall return 747', () => {
    const input = 362
    const result = day2.solvePart2(input)
    assert.equal(result, 747)
  })

  it('shall return 806', () => {
    const input = 747
    const result = day2.solvePart2(input)
    assert.equal(result, 806)
  })

  it('shall return 122', () => {
    const input = 59
    const result = day2.solvePart2(input)
    assert.equal(result, 122)
  })
})
