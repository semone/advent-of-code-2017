function spin (input, move) {
  return input
    .trim()
    .split('')
    .slice(input.length - move, input.length)
    .concat(input.slice(0, input.length - move))
    .join('')
}

function exchange (input, move) {
  const placeA = move[0]
  const placeB = move[1]

  const a = input.split('')
  const temp = a[placeA]
  a[placeA] = a[placeB]
  a[placeB] = temp

  return a.join('')
}

function partner (input, move) {
  const clean = input.split('')

  const placeA = clean.findIndex(element => element === move[0])
  const placeB = clean.findIndex(element => element === move[1])

  const temp = clean[placeA]
  clean[placeA] = clean[placeB]
  clean[placeB] = temp

  return clean.join('')
}

function dance (sequence, moves) {
  return moves.trim().split(',')
    .reduce((sequence, element) => {
      if (element[0] === 's') {
        return spin(sequence, element.slice(1))
      }
      if (element[0] === 'x') {
        const swap = element.slice(1).split('/')
        return exchange(sequence, [swap[0], swap[1]])
      }

      if (element[0] === 'p') {
        const swap = element.slice(1).split('/')
        return partner(sequence, [swap[0], swap[1]])
      }
    }, sequence)
}

function solvePart1 (input, danceSequence) {
  return dance(danceSequence, input)
}

function solvePart2 (input, danceSequence) {
  let sequence = danceSequence
  let uniqeSequences = []
  for (let index = 0; index < 1000000000; index++) {
    uniqeSequences.push(sequence)
    sequence = dance(sequence, input)

    if (sequence === danceSequence) {
      break
    }
  }

  return uniqeSequences[1000000000 % uniqeSequences.length]
}

module.exports = {
  solvePart1,
  solvePart2
}
