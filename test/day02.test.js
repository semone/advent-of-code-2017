const assert = require('chai').assert

const day2 = require('../src/day02/day2')

describe('Corruption Checksum Part 1', () => {
  it('shall return 8884', () => {
    const input = '5195\t753\t2468\n5195\t753\t2468'
    const result = day2.solvePart1(input)
    assert.equal(result, 8884)
  })

  it('shall return 18', () => {
    const input = '5\t1\t9\t5\n7\t5\t3\n2\t4\t6\t8'
    const result = day2.solvePart1(input)
    assert.equal(result, 18)
  })
})

describe('Corruption Checksum Part 2', () => {
  it('shall return 9', () => {
    const input = '5\t9\t2\t8\n9\t4\t7\t3\n3\t8\t6\t5'
    const result = day2.solvePart2(input)
    assert.equal(result, 9)
  })

  it('shall return 7', () => {
    const input = '3\t9\t7\t2\n4\t2\t9\t7\n3\t8\t6\t5'
    const result = day2.solvePart2(input)
    assert.equal(result, 7)
  })

  it('shall return 7', () => {
    const input = '3\t9\t7\t2\n4\t2\t9\t7\n3\t8\t6\t5'
    const result = day2.solvePart2(input)
    assert.equal(result, 7)
  })
})
