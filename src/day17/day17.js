function solvePart1 (stepSize) {
  let currentPosistion = 0
  let buffer = [currentPosistion]

  for (let index = 1; index <= 2017; index++) {
    currentPosistion = ((currentPosistion + stepSize) % index) + 1
    buffer.splice(currentPosistion, 0, index)
  }

  return buffer[currentPosistion + 1]
}

function solvePart2 (stepSize) {
  let currentPosistion = 0
  let value = 0

  for (let index = 1; index <= 50000000; index++) {
    currentPosistion = ((currentPosistion + stepSize) % index) + 1

    if (currentPosistion === 1) {
      value = index
    }
  }

  return value
}

module.exports = {
  solvePart1,
  solvePart2
}
