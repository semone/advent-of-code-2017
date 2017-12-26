const input = `Begin in state A.
Perform a diagnostic checksum after 6 steps.

In state A:
If the current value is 0:
  - Write the value 1.
  - Move one slot to the right.
  - Continue with state B.
If the current value is 1:
- Write the value 0.
  - Move one slot to the left.
  - Continue with state B.

In state B:
If the current value is 0:
  - Write the value 1.
  - Move one slot to the left.
  - Continue with state A.
If the current value is 1:
  - Write the value 1 .
  - Move one slot to the right.
  - Continue with state A.`

const assert = require('chai').assert

const day25 = require('../src/day25/day25')

describe('The Halting Problem', () => {
  it('shall return correct checksum', () => {
    const result = day25.solve(input)
    assert.equal(result, 3)
  })
})
