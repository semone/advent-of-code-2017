function removeIgnoredChars (input) {
  const charsToRemoveIndex = input.replace(/(!!)/g, '--')
    .trim()
    .split('')
    .map((char, index) => char === '!' ? index + 1 : -1)
    .filter(index => index !== -1)

  return input
    .split('')
    .filter((char, index) => {
      return !charsToRemoveIndex.includes(index)
    })
    .filter(char => char !== '!').join('')
}

function cleanAllGarbage (input, sum) {
  sum = sum || 0
  const openPosition = input.findIndex(element => element === '<')
  const closePosition = input.findIndex(element => element === '>') || openPosition
  let cleanedArray = []

  if (closePosition !== openPosition) {
    cleanedArray = input
      .slice(0, openPosition)
      .concat(input.slice(closePosition + 1, input.length))
    sum += closePosition - (openPosition + 1)
  } else {
    cleanedArray = input
  }

  if (cleanedArray.findIndex(elem => elem === '>') > 0) {
    return cleanAllGarbage(cleanedArray, sum)
  }
  return [cleanedArray.join(''), sum]
}

function countGroups (input) {
  let count = 0
  let index = input.findIndex(element => element === '}')
  input.splice(index - 1, 2)

  if (input.length > 0) {
    count += countGroups(input)
  }

  return count + index
}

function getNumberOfGroups (input) {
  const cleanedInput = cleanAllGarbage((removeIgnoredChars(input).split('')))
  const groups = cleanedInput[0].replace(/[^{}]/g, '').split('')

  const sum = countGroups(groups)
  return [sum, cleanedInput[1]]
}

module.exports = {
  removeIgnoredChars,
  getNumberOfGroups,
  cleanAllGarbage
}
