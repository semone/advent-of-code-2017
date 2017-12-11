const assert = require('chai').assert

const day2 = require('../src/day11/day11')

describe('Corruption Checksum Part 1', () => {
  it('shall get position', () => {
    const input = 'ne,ne,ne'
    const result = day2.getPosition(input)
    assert.deepEqual(result, { x: 3, y: 0, max: 3 })
  })

  it('shall get distance', () => {
    const input = 'ne,ne,ne'
    const result = day2.solve(input)
    assert.deepEqual(result[0], 3)
  })

  it('shall get distance', () => {
    const input = 'ne,ne,sw,sw'
    const result = day2.solve(input)
    assert.deepEqual(result[0], 0)
  })

  it('shall get distance', () => {
    const input = 'ne,ne,s,s'
    const result = day2.solve(input)
    assert.deepEqual(result[0], 2)
  })

  it('shall get distance', () => {
    const input = 'se,sw,se,sw,sw'
    const result = day2.solve(input)
    assert.deepEqual(result[0], 3)
  })
})

describe('Corruption Checksum Part 2', () => {
  it('shall get distance', () => {
    const input = 'ne,ne,sw,sw'
    const result = day2.solve(input)
    assert.deepEqual(result[1], 2)
  })
})
