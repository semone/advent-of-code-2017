function solvePart1 (input, listSize) {
  let list = Array.from(Array(listSize).keys())

  const result = hash(input, 0, 0, list)
  return result[0][0] * result[0][1]
}

function solvePart2 (input, listSize) {
  const sequence = createAsciiSequence(input.trim())
  const sparseResult = sparseHash(sequence, listSize)
  const denseResult = denseHash(sparseResult)
  return hexaDecimal(denseResult)
}

function hash (lengths, skipSize, currentPosition, list) {
  list = list || []
  currentPosition = currentPosition || 0
  skipSize = skipSize || 0

  lengths.trim()
    .split(',')
    .map(Number)
    .forEach((element, index, array) => {
      if (element > 1) {
        list = getNewList(list, currentPosition, element)
      }

      if ((currentPosition + element + skipSize) > array.length) {
        currentPosition = (currentPosition + element + skipSize) % list.length
      } else {
        currentPosition += element + skipSize
      }
      skipSize++
    })

  return [list, skipSize, currentPosition]
}

function getNewList (list, currentPosition, length) {
  if (list.length < currentPosition + length) {
    list.push(...list.splice(0, currentPosition))
    list = list
      .slice(0, length)
      .reverse()
      .concat(list.slice(length, list.length))
    list.unshift(...list.splice(list.length - currentPosition, list.length))
    return list
  }
  return list
    .slice(0, currentPosition)
    .concat(list.slice(currentPosition, currentPosition + length).reverse())
    .concat(list.slice(currentPosition + length, list.length))
}

function createAsciiSequence (input) {
  if (input) {
    return input
      .split('')
      .map(char => char.charCodeAt(0))
      .reduce((word, char) => `${word},${char}`) + `,17,31,73,47,23`
  }

  return `17,31,73,47,23`
}

function sparseHash (sequence, listSize) {
  let skipSize = 0
  let currentPosition = 0
  let list = Array.from(Array(listSize).keys())

  for (let index = 0; index < 64; index++) {
    [list, skipSize, currentPosition] = hash(sequence, skipSize, currentPosition, list)
  }
  return list
}

function denseHash (list) {
  if (list.length !== 256) {
    throw new Error('Wrong')
  }
  return list.reduce((dense, element, index, input) => {
    if ((index - 1) % 16 === 0) {
      const denseBit = input.slice(index - 1, (index - 1) + 16)

      dense.push(denseBit.reduce((densePart, next) => {
        return densePart ^ next
      }))
    }
    return dense
  }, [])
}

function hexaDecimal (denseHash) {
  return denseHash.reduce((str, next) => {
    const hex = next.toString(16)
    return str + (hex.length === 1 ? '0' + hex : hex)
  }, '')
}

module.exports = {
  getNewList,
  createAsciiSequence,
  solvePart1,
  solvePart2
}
