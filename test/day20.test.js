const input = `p=<3,0,0>, v=<2,0,0>, a=<-1,0,0>
p=<4,0,0>, v=<0,0,0>, a=<-2,0,0>`

const assert = require('chai').assert

const day20 = require('../src/day20/day20')

describe('Particle SwarmPart 1', () => {
  it('shall closest particle', () => {
    const result = day20.solvePart1(input)
    assert.equal(result, 0)
  })
})

describe('Particle Swarm Part 1', () => {
})
