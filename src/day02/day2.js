function solvePart1 (input) {
  return input.split('\n')
    .map((numbers) => {
      const numberArray = numbers.split('\t').map(Number)
      const lowest = numberArray.reduce((a, b) => Math.min(a, b))
      const highest = numberArray.reduce((a, b) => Math.max(a, b))
      return highest - lowest
    })
    .reduce((a, b) => a + b)
}

function solvePart2 (input) {
  return input.split('\n')
    .map((numbers) => {
      return numbers
        .split('\t')
        .map(Number)
        .reduce((result, currentNumber, index, input) => {
          const divideableNumber = input
            .filter((number) => number !== currentNumber)
            .find((number) => currentNumber % number === 0)
          if (divideableNumber) {
            return currentNumber / divideableNumber
          }
          return result
        }, 0)
    })
    .reduce((a, b) => a + b)
}

module.exports = {
  solvePart1,
  solvePart2
}
