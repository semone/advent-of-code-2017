function solvePart1 (input) {
  return input.split('\n')
    .map((passPhrase) => {
      const words = passPhrase.split(' ')
      return hasDuplicates(words)
    })
    .reduce((sum, element, index, input) => {
      if (element === false) {
        sum++
      }
      return sum
    }, 0)
}

function hasDuplicates (array) {
  return (new Set(array)).size !== array.length
}

function solvePart2 (input) {
  return input.split('\n')
    .map((passPhrase) => {
      const words = passPhrase
        .split(' ')
        .map((chars) => {
          return chars.split('').sort().join('')
        })
      return hasDuplicates(words)
    })
    .reduce((sum, element, index, input) => {
      if (element === false) {
        sum++
      }
      return sum
    }, 0)
}

module.exports = {
  solvePart1,
  solvePart2
}
