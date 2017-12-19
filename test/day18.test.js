const assert = require('chai').assert

const day18 = require('../src/day18/day18')

const input = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`

const input2 = `snd 1
snd 2
snd p
rcv a
rcv b
rcv c
rcv d`

describe('Duet Part 1', () => {
  it('shall return value of recovered frequency', () => {
    const result = day18.solvePart1(input)
    assert.equal(result, 4)
  })
})

describe('Duet Part 2', () => {
  it('shall return numbers of sendt', () => {
    const result = day18.solvePart2(input2)
    assert.equal(result, 3)
  })
})
