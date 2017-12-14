const assert = require('chai').assert

const day14 = require('../src/day14/day14')

const input = `flqrgnkx`

describe('Disk Defragmentation Part 1', () => {
  it('shall return correct sum', () => {
    const result = day14.solvePart1(input, 128)
    assert.equal(result, 8108)
  })
})

describe('Disk Defragmentation Part 2', () => {
  it('shall return correct number of groups', () => {
    const result = day14.solvePart2(input, 128)
    assert.equal(result, 1242)
  })
})
