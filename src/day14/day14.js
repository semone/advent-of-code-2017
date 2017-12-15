
const day10 = require('../day10/day10')

function getHashInputs (input, rows) {
  const rowArray = Array.from(Array(rows).keys())

  return rowArray.map(number => {
    return `${input}-${number}`
  })
}

function convertToBits (input) {
  return input
    .split('')
    .map(hex => {
      const dirtyBit = (`000${parseInt(hex, 16).toString(2)}`)
      return dirtyBit.substr(dirtyBit.length - 4)
    }).join('')
}

function checkConnections (x, y, bitRows, size) {
  if (!isValid(x, y, size) || bitRows[x][y] === 0) {
    return
  }
  bitRows[x][y] = 0

  checkConnections(x + 1, y, bitRows, size)
  checkConnections(x - 1, y, bitRows, size)
  checkConnections(x, y + 1, bitRows, size)
  checkConnections(x, y - 1, bitRows, size)
}

function isValid (x, y, size) {
  return x >= 0 && x < size && y >= 0 && y < size
}

function solvePart1 (input, rows) {
  return getHashInputs(input, rows)
    .map(input => {
      return day10.solvePart2(input, 256)
    })
    .map(hash => {
      return convertToBits(hash)
    })
    .reduce((sum, element) => {
      return sum + element.split('').reduce((sum, element) => {
        return sum + parseInt(element)
      }, 0)
    }, 0)
}

function solvePart2 (input, rows) {
  const bitRows = getHashInputs(input, rows)
    .map(input => {
      return day10.solvePart2(input, 256)
    })
    .map(hash => {
      return convertToBits(hash).split('').map(Number)
    })

  let groups = 0
  const size = bitRows.length

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (bitRows[x][y] === 1) {
        groups++
        checkConnections(x, y, bitRows, size)
      }
    }
  }

  return groups
}

module.exports = {
  solvePart1,
  solvePart2,
  convertToBits
}
