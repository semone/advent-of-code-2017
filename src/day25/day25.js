
function solve (input) {
  const cleanedInput = input.trim().split('\n\n')
  const numberOfSteps = cleanedInput[0].match(/\d+/).map(Number)[0]

  let state = cleanedInput[0].match(/state ([A-Z])/)[1]

  const rules = cleanedInput
    .slice(1)
    .map(inst => inst.split('\n').map(s => s.match(/\b\w\b|left|right/g)[0]))
    .map(([state, value1, write1, direction1, next1, value2, write2, direction2, next2]) => ({
      state,
      [value1]: { write: Number(write1), direction: direction1 === 'left' ? -1 : 1, next: next1 },
      [value2]: { write: Number(write2), direction: direction2 === 'left' ? -1 : 1, next: next2 }
    }))
    .reduce((a, v) => {
      return Object.assign(a, {[v.state]: v})
    }, {})

  let tape = [0]
  let tapeIndex = 0
  for (let index = 0; index < numberOfSteps; index++) {
    let stateVal = rules[state]
    let tapeVal = tape[tapeIndex] || 0

    tape[tapeIndex] = stateVal[tapeVal].write
    state = stateVal[tapeVal].next

    tapeIndex += stateVal[tapeVal].direction

    if (tapeIndex < 0) {
      tape.unshift(0)
      tapeIndex++
    }
    if (tapeIndex > tape.length) {
      tape.pop(0)
    }
  }

  return tape.reduce((sum, next) => {
    return sum + next
  }, 0)
}

module.exports = {
  solve
}
