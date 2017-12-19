const assert = require('chai').assert

const day15 = require('../src/day16/day16')

const input = 's1,x3/4,pe/b'
const danceSequence = 'abcde'

describe('Permutation Promenade Part 1', () => {
  it('shall return correct dance output ', () => {
    const result = day15.solvePart1(input, danceSequence)
    assert.equal(result, 'baedc')
  })
})
