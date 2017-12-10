const assert = require('chai').assert

const day9 = require('../src/day9/day9')

describe('Stream Processing Part 1', () => {
  // it('shall clean garbage', () => {
  //   const input = '{<a>,<a>,<a>,<a>}'
  //   const result = day9.cleanGarbage(input)
  //   assert.equal(result[0], '{,,,}')
  // })

  // it('shall clean garbage', () => {
  //   const input = '{<{},{},{{}}>}'
  //   const result = day9.cleanGarbage(input)
  //   assert.equal(result[0], '{}')
  // })

  it('shall remove ignored chars', () => {
    const input = '{{<!>},{<!>},{<!>},{<a>}}'
    const result = day9.removeIgnoredChars(input)
    assert.equal(result, '{{<},{<},{<},{<a>}}')
  })

  it('shall remove ignored chars', () => {
    const input = '{{<!!>},{<!!>},{<!!>},{<!!>}}'
    const result = day9.removeIgnoredChars(input)
    assert.equal(result, '{{<>},{<>},{<>},{<>}}')
  })

  it('shall remove ignored chars and clean array', () => {
    const input = '{{<!>},{<!>},{<!>},{<a>}}'
    const result = day9.cleanAllGarbage((day9.removeIgnoredChars(input)).split(''))
    assert.equal(result[0], '{{}}')
  })

  it('shall count groups', () => {
    const input = '{{<a!>},{<a!>},{<a!>},{<ab>}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 3)
  })

  it('shall count groups', () => {
    const input = '{{<!!>},{<!!>},{<!!>},{<!!>}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 9)
  })

  it('shall count groups', () => {
    const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 9)
  })

  it('shall count groups', () => {
    const input = '{<a>,<a>,<a>,<a>}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 1)
  })

  it('shall count groups', () => {
    const input = '{{{}}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 6)
  })

  it('shall count groups', () => {
    const input = '{{},{}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 5)
  })

  it('shall count groups', () => {
    const input = '{{{},{},{{}}}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[0], 16)
  })
  it('shall count removed chars', () => {
    const input = '{<random characters>}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[1], 17)
  })

  it('shall count removed chars', () => {
    const input = '{<random characters>}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[1], 17)
  })

  it('shall count removed chars', () => {
    const input = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[1], 8)
  })

  it('shall count removed chars', () => {
    const input = '{<>}'
    const result = day9.getNumberOfGroups(input)
    assert.equal(result[1], 0)
  })
})
