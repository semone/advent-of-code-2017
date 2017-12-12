function solvePart1 (input) {
  let currentIndex = 0
  let jumpVal = 0

  const result = input
    .split('\n')
    .map(Number)

  let steps = 0

  while (currentIndex >= 0 && currentIndex < result.length) {
    jumpVal = result[currentIndex]
    result[currentIndex]++

    currentIndex += jumpVal
    steps++
  }

  return steps
}

function solvePart2 (input) {
  let currentIndex = 0
  let jumpVal = 0

  const result = input
    .split('\n')
    .map(Number)

  let steps = 0

  while (currentIndex >= 0 && currentIndex < result.length) {
    jumpVal = result[currentIndex]
    if (jumpVal >= 3) {
      result[currentIndex]--
    } else {
      result[currentIndex]++
    }
    currentIndex += jumpVal
    steps++
  }

  return steps
}
module.exports = {
  solvePart1,
  solvePart2
}
