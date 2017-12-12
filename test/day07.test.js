const input = `pbga(66)
xhth(57)
ebii(61)
havc(66)
ktlj(57)
fwft(72) -> ktlj, cntj, xhth
qoyq(66)
padx(45) -> pbga, havc, qoyq
tknk(41) -> ugml, padx, fwft
jptl(61)
ugml(68) -> gyxo, ebii, jptl
gyxo(61)
cntj(57)`

const assert = require('chai').assert

const day7 = require('../src/day07/day7')

describe('Corruption Checksum Part 1', () => {
  it('shall return tknk', () => {
    const result = day7.solvePart1(input)
    assert.equal(result, 'tknk')
  })
})
