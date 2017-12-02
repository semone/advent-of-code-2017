/**
 * The captcha requires you to review a sequence of digits(your puzzle input)
 * and find the sum of all digits that match the next digit in the list.
 * The list is circular, so the digit after the last digit is the first digit in the list.
 */

function solvePart1 (sequence) {
  const inputArray = sequence.split('').map(Number)

  const start = {
    'sum': 0,
    'firstItem': inputArray[0]
  }

  const result = inputArray.reduce((obj, next) => {
    if (obj.prevItem === next) {
      obj.sum = obj.sum + next
    }

    obj.prevItem = next

    return obj
  }, start)

  if (result.prevItem === result.firstItem) {
    result.sum += result.prevItem
  }

  return result.sum
}

function solvePart2 (input) {
  return input.split('')
    .map(Number)
    .reduce((sum, currentItem, index, inputArray) => {
      if (currentItem === inputArray[(inputArray.length / 2) + index]) {
        sum += currentItem * 2
      }
      return sum
    }, 0)
}

module.exports = {
  solvePart1,
  solvePart2
}
