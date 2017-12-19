function changeDirection (map, position) {
  if (map[position.y][position.x] === '+') {
    if (position.y - 1 > 0 && !isEmpthyPath(map, position.x, position.y - 1) && position.direction !== 1) {
      position.direction = 3
      return
    }

    if (position.x - 1 > 0 && !isEmpthyPath(map, position.x - 1, position.y) && position.direction !== 2) {
      position.direction = 4
      return
    }

    if (position.y + 1 < map.length && !isEmpthyPath(map, position.x, position.y + 1) && position.direction !== 3) {
      position.direction = 1
      return
    }

    if (position.x + 1 < map[position.y].length && !isEmpthyPath(map, position.x + 1, position.y) && position.direction !== 4) {
      position.direction = 2
    }
  }
}

function isOutsideMap (map, x, y) {
  return x > map[y].length || y > map.length || y < 0 || x < 0
}

function isEmpthyPath (map, x, y) {
  return !map[y][x] || map[y][x] === ' '
}

function isLetter (map, position) {
  return !isEmpthyPath(map, position.x, position.y) && map[position.y][position.x].match(/[A-Z]/i)
}

function solve (input) {
  const mapSplit = input.split('\n')
  let postitionX = mapSplit[0]
    .split('')
    .findIndex(direction => direction === '|')

  let position = {
    x: postitionX,
    y: 0,
    direction: 1
  }
  let result = ['', 0]

  do {
    if (position.direction === 1) {
      position.y++
    }

    if (position.direction === 2) {
      position.x++
    }

    if (position.direction === 3) {
      position.y--
    }

    if (position.direction === 4) {
      position.x--
    }

    changeDirection(mapSplit, position)

    result[1]++

    if (isLetter(mapSplit, position)) {
      result[0] += mapSplit[position.y][position.x]
    }
  } while (!isOutsideMap(mapSplit, position.x, position.y) && !isEmpthyPath(mapSplit, position.x, position.y))

  return result
}

module.exports = {
  solve
}
