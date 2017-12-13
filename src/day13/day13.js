function isCaught (picoSecond, range, delay = 0) {
  if ((picoSecond + delay) % (range - 1) === 0 && ((picoSecond + delay) / (range - 1)) % 2 === 0) {
    return true
  }
  return false
}

function cleanInput (input) {
  return input
    .trim()
    .split('\n')
    .reduce((obj, element, index) => {
      obj[element.split(': ')[0]] = parseInt(element.split(': ')[1])
      return obj
    }, {})
}

function solvePart1 (input) {
  const cleanedInput = cleanInput(input)

  const numberOfLayers = Math.max(...Object.keys(cleanedInput))
  let severies = []

  for (let index = 0; index <= numberOfLayers; index++) {
    if (isCaught(index, cleanedInput[index])) {
      severies.push(index * cleanedInput[index])
    }
  }

  return severies.reduce((sum, el) => sum + el)
}

function solvePart2 (input) {
  const cleanedInput = cleanInput(input)
  const numberOfLayers = Math.max(...Object.keys(cleanedInput))
  let isCaughtSomewhere = true

  let delay = 0

  while (isCaughtSomewhere) {
    let isCaughtByFW = false

    for (let i = 0; i <= numberOfLayers; i++) {
      if (isCaught(i, cleanedInput[i], delay)) {
        isCaughtByFW = true
        break
      }
    }

    if (!isCaughtByFW) {
      isCaughtSomewhere = false
    } else {
      delay++
    }
  }

  return delay
}

module.exports = {
  solvePart1,
  solvePart2
}
