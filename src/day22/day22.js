const VALUES = {
  '.': 'W',
  '#': 'F',
  'W': '#',
  'F': '.'
}

const DIRECTIONS = {
  '1#': 2,
  '1.': 4,
  '1F': 3,
  '1W': 1,
  '2#': 3,
  '2.': 1,
  '2F': 4,
  '2W': 2,
  '3#': 4,
  '3.': 2,
  '3F': 1,
  '3W': 3,
  '4#': 1,
  '4.': 3,
  '4F': 2,
  '4W': 4
}

function getNewPosition (position, direction) {
  const pos = position.split(',')
  let x = parseInt(pos[0])
  let y = parseInt(pos[1])
  if (direction === 1) {
    return `${x},${y - 1}`
  }
  if (direction === 2) {
    return `${x + 1},${y}`
  }
  if (direction === 3) {
    return `${x},${y + 1}`
  }
  if (direction === 4) {
    return `${x - 1},${y}`
  }
}

function getValue (map, position) {
  if (map[position]) {
    return map[position]
  }
  return '.'
}

function getStartPosition (input) {
  const map = input.split('\n')
  const x = Math.floor(map.length / 2)
  const y = Math.floor(map[0].length / 2)
  return `${x},${y}`
}

function initMap (input) {
  let map = {}
  input
    .split('\n')
    .forEach((row, index) => {
      for (let i = 0; i < row.length; i++) {
        map[`${i},${index}`] = row.charAt(i)
      }
    })
  return map
}

function init (input) {
  return {
    map: initMap(input),
    position: getStartPosition(input),
    direction: 1,
    value: '',
    infectedBursts: 0
  }
}

function solvePart1 (input, iterations) {
  const data = init(input.trim())

  for (let i = 0; i < iterations; i++) {
    data.value = getValue(data.map, data.position)
    data.direction = DIRECTIONS[data.direction + data.value]

    data.map[data.position] = data.value === '.' ? '#' : '.'
    if (data.value === '.') {
      data.infectedBursts++
    }

    data.position = getNewPosition(data.position, data.direction)
  }
  return data.infectedBursts
}

function solvePart2 (input, iterations) {
  const data = init(input.trim())

  for (let i = 0; i < iterations; i++) {
    data.value = getValue(data.map, data.position)
    data.direction = DIRECTIONS[data.direction + data.value]

    data.map[data.position] = VALUES[data.value]
    if (data.value === 'W') {
      data.infectedBursts++
    }

    data.position = getNewPosition(data.position, data.direction)
  }
  return data.infectedBursts
}

module.exports = {
  solvePart1,
  solvePart2
}
