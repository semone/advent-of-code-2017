const input = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`

const assert = require('chai').assert

const day8 = require('../src/day8/day8')

describe('I Heard You Like Registers Part 1', () => {
  it('shall return 1', () => {
    const result = day8.solve(input)
    assert.equal(result[0], 1)
  })
})

describe('I Heard You Like Registers Part 2', () => {
  it('shall return 10', () => {
    const result = day8.solve(input)
    assert.equal(result[1], 10)
  })
})
