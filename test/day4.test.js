const assert = require('chai').assert

const day4 = require('../src/day4/day4')

describe('High-Entropy Passphrases Part 1', () => {
  it('shall return 1', () => {
    const input = 'aa bb cc dd ee'
    const result = day4.solvePart1(input)
    assert.equal(result, 1)
  })

  it('shall return 0', () => {
    const input = 'aa bb cc dd aa'
    const result = day4.solvePart1(input)
    assert.equal(result, 0)
  })

  it('shall return 1', () => {
    const input = 'aa bb cc dd aaa'
    const result = day4.solvePart2(input)
    assert.equal(result, 1)
  })
})

describe('High-Entropy Passphrases Part 2', () => {
  it('shall return 1', () => {
    const input = 'abcde fghij'
    const result = day4.solvePart2(input)
    assert.equal(result, 1)
  })

  it('shall return 0', () => {
    const input = 'abcde xyz ecdab'
    const result = day4.solvePart2(input)
    assert.equal(result, 0)
  })

  it('shall return 1', () => {
    const input = 'a ab abc abd abf abj'
    const result = day4.solvePart2(input)
    assert.equal(result, 1)
  })

  it('shall return 1', () => {
    const input = 'iiii oiii ooii oooi oooo'
    const result = day4.solvePart2(input)
    assert.equal(result, 1)
  })

  it('shall return 0', () => {
    const input = 'oiii ioii iioi iiio'
    const result = day4.solvePart2(input)
    assert.equal(result, 0)
  })
})
