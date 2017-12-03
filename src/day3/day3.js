
function solvePart1 (input) {
  const size = Math.ceil(Math.sqrt(input))
  const coord = spiralPart1(size, input)
  return manhattanDistance(coord)
}

function manhattanDistance (coord) {
  return Math.abs(coord.x - 0) + Math.abs(coord.y - 0)
}

function spiralPart1 (size, input) {
  let x = 0
  let y = 0
  let delta = [0, -1]

  for (let i = 1; i <= size * size; i++) {
    if ((-size / 2 < x && x <= size / 2) && (-size / 2 < y && y <= size / 2)) {
      if (i === input) {
        return {x, y}
      }
    }

    // Should change direction?
    if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y)) {
      delta = [-delta[1], delta[0]]
    }

    x += delta[0]
    y += delta[1]
  }
}

function solvePart2 (input) {
  const size = Math.ceil(Math.sqrt(input))
  const nextValue = spiralPart2(size, input)
  return nextValue
}

function spiralPart2 (size, index) {
  let x = 0
  let y = 0
  let delta = [0, -1]
  let valueObject = []
  for (let i = 1; i <= size * size; i++) {
    if ((-size / 2 < x && x <= size / 2) && (-size / 2 < y && y <= size / 2)) {
      let value = 0
      if (valueObject.length === 0) {
        value = 1
      } else {
        value = valueObject.reduce((sum, element) => {
          if ((element.x === x - 1) && (element.y === y)) {
            sum += element.value
          }

          if ((element.x === x + 1) && (element.y === y)) {
            sum += element.value
          }

          if ((element.x === x) && (element.y === y - 1)) {
            sum += element.value
          }

          if ((element.x === x - 1) && (element.y === y + 1)) {
            sum += element.value
          }

          if ((element.x === x) && (element.y === y + 1)) {
            sum += element.value
          }

          if ((element.x === x + 1) && (element.y === y + 1)) {
            sum += element.value
          }

          if ((element.x === x - 1) && (element.y === y - 1)) {
            sum += element.value
          }

          if ((element.x === x + 1) && (element.y === y - 1)) {
            sum += element.value
          }

          return sum
        }, 0)
      }

      if (value > index) {
        return value
      }

      valueObject.push({ x, y, value })
    }

    // Should change direction?
    if (x === y || (x < 0 && x === -y) || (x > 0 && x === 1 - y)) {
      delta = [-delta[1], delta[0]]
    }

    x += delta[0]
    y += delta[1]
  }
}

module.exports = {
  solvePart1,
  solvePart2
}
