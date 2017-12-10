const assert = require('chai').assert

const day1 = require('../src/day1/day1')

describe('Capcha Part1', () => {
  it('shall produce a sum of 3', () => {
    const sequence = '1122'
    const result = day1.solvePart1(sequence)
    assert.equal(result, 3)
  })

  it('shall produce a sum of 4', () => {
    const sequence = '1111'
    const result = day1.solvePart1(sequence)
    assert.equal(result, 4)
  })

  it('shall produce a sum of 9', () => {
    const sequence = '91212129'
    const result = day1.solvePart1(sequence)
    assert.equal(result, 9)
  })

  it('shall produce a sum of 0', () => {
    const sequence = '1234'
    const result = day1.solvePart1(sequence)
    assert.equal(result, 0)
  })
})

describe('Capcha Part2', () => {
  it('shall produce the sum of 6', () => {
    const sequence = '1212'
    const result = day1.solvePart2(sequence)
    assert.equal(result, 6)
  })

  it('shall produce the sum of 0', () => {
    const sequence = '1221'
    const result = day1.solvePart2(sequence)
    assert.equal(result, 0)
  })

  it('shall produce the sum of 4', () => {
    const sequence = '123425'
    const result = day1.solvePart2(sequence)
    assert.equal(result, 4)
  })

  it('shall produce the sum of 12', () => {
    const sequence = '123123'
    const result = day1.solvePart2(sequence)
    assert.equal(result, 12)
  })

  it('shall produce the sum of 4', () => {
    const sequence = '12131415'
    const result = day1.solvePart2(sequence)
    assert.equal(result, 4)
  })
})
