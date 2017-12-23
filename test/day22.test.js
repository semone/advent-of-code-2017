const input = `..#
#..
...`

const assert = require('chai').assert

const day22 = require('../src/day22/day22')

describe('Sporifica Virus Part 1', () => {
  it('shall return infected nodes', () => {
    const result = day22.solvePart1(input, 7)
    assert.equal(result, 5)
  })

  it('shall return infected nodes', () => {
    const result = day22.solvePart1(input, 70)
    assert.equal(result, 41)
  })

  it('shall return infected nodes', () => {
    const result = day22.solvePart1(input, 10000)
    assert.equal(result, 5587)
  })
})

describe('Sporifica Virus Part 2', () => {
  it('shall return infected nodes', () => {
    const result = day22.solvePart2(input, 100)
    assert.equal(result, 26)
  })

  it('shall return infected nodes', () => {
    const result = day22.solvePart2(input, 10000000)
    assert.equal(result, 2511944)
  }).timeout(10000)
})
