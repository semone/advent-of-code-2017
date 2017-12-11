const STEP = {
  n: {x: 0, y: -1},
  ne: { x: 1, y: 0 },
  nw: { x: -1, y: -1 },
  se: { x: 1, y: 1 },
  sw: { x: -1, y: 0 },
  s: {x: 0, y: 1}
}

function getPosition (input) {
  const steps = input.trim().split(',')
  const pos = steps.reduce((position, element) => {
    position.x += STEP[element].x
    position.y += STEP[element].y

    const possibleMax = getDistance(position)
    if (possibleMax[0] > position.max) {
      position.max = possibleMax[0]
    }

    return position
  }, { x: 0, y: 0, max: 0 })
  return pos
}

function getDistance (stop) {
  const deltaX = 0 - stop.x
  const deltaY = 0 - stop.y
  const distance = ((Math.abs(deltaX) + Math.abs(deltaY) + Math.abs(deltaX - deltaY)) / 2)

  return [distance, stop.max]
}

function solve (input) {
  const stop = getPosition(input)
  return getDistance(stop)
}

module.exports = {
  getPosition,
  solve
}
