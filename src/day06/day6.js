function solvePart1 (input) {
  const states = getStates(input)
  return states.length - 1
}

function solvePart2 (input) {
  const states = getStates(input)
  const lastState = states[states.length - 1]

  const hitIndex = states.findIndex((element) => element === lastState)
  return states.length - hitIndex - 1
}

function getStates (input) {
  const inputArray = input.split('\t').map(Number)
  const state = []
  while ((new Set(state)).size === state.length) {
    state.push(inputArray.join('\t'))
    const max = Math.max(...inputArray)
    const maxIndex = inputArray.indexOf(max)

    inputArray[maxIndex] = 0
    for (let index = 1; index <= max; index++) {
      inputArray[(maxIndex + index) % inputArray.length] += 1
    }
  }
  return state
}

module.exports = {
  solvePart1,
  solvePart2
}
