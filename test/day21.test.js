const rules = `../.# => ##./#../...
.#./..#/### => #..#/..../..../#..#`

const assert = require('chai').assert

const day21 = require('../src/day21/day21')

describe('Fractal Art Part 1', () => {
  it('shall return cleaned matches', () => {
    const result = day21.solve(rules, 2)
    assert.equal(result, 12)
  })
})
