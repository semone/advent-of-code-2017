function direction (map, position) {
  if (map[position.y][position.x] === '+') {
    if (position.y - 1 > 0 && map[position.y - 1][position.x] && map[position.y - 1][position.x] !== ' ' && position.direction !== 1) {
      position.direction = 3
      return
    }

    if (position.x - 1 > 0 && map[position.y][position.x - 1] && map[position.y][position.x - 1] !== ' ' && position.direction !== 2) {
      position.direction = 4
      return
    }

    if (position.y + 1 < map.length && map[position.y + 1][position.x] && map[position.y + 1][position.x] !== ' ' && position.direction !== 3) {
      position.direction = 1
      return
    }

    if (position.x + 1 < map[position.y].length && map[position.y][position.x + 1] && map[position.y][position.x + 1] !== ' ' && position.direction !== 4) {
      position.direction = 2
    }
  }
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

  while (true) {
    if (position.direction === 1) {
      position.y++
      result[1]++
    }

    if (position.direction === 2) {
      position.x++
      result[1]++
    }

    if (position.direction === 3) {
      position.y--
      result[1]++
    }

    if (position.direction === 4) {
      position.x--
      result[1]++
    }

    direction(mapSplit, position)

    if (position.x > mapSplit[position.y].length || position.y > mapSplit.length || position.y < 0 || position.x < 0 || mapSplit[position.y][position.x] === ' ') {
      break
    }

    if (mapSplit[position.y][position.x] && mapSplit[position.y][position.x].match(/[A-Z]/i)) {
      result[0] += mapSplit[position.y][position.x]
    }
  }
  return result
}

module.exports = {
  solve
}
