
function getMatchesArray (input) {
  let rules = {}
  input.trim().split('\n').forEach(element => {
    const values = element.split(' => ')
    rules[values[0]] = values[1]
  })

  return rules
}

function getSquaresToConvert (square) {
  let squares = []
  if (square.split('/').length % 2 === 0) {
    squares = splitSquare2(square)
  } else {
    squares = splitSquare3(square)
  }
  return squares
}

function splitSquare2 (square) {
  const inputs = square.split('/')
  let result = []
  for (let i = 0; i < inputs.length; i += 2) {
    for (let j = 0; j < inputs.length; j += 2) {
      result.push(`${inputs[i][j]}${inputs[i][j + 1]}/${inputs[i + 1][j]}${inputs[i + 1][j + 1]}`)
    }
  }

  return result
}

function splitSquare3 (square) {
  const inputs = square.split('/')
  let result = []
  for (let i = 0; i < inputs.length; i += 3) {
    for (let j = 0; j < inputs.length; j += 3) {
      result.push(`${inputs[i][j]}${inputs[i][j + 1]}${inputs[i][j + 2]}/${inputs[i + 1][j]}${inputs[i + 1][j + 1]}${inputs[i + 1][j + 2]}/${inputs[i + 2][j]}${inputs[i + 2][j + 1]}${inputs[i + 2][j + 2]}`)
    }
  }

  return result
}

function newPatternString (squares) {
  const arrl = squares[0].match(/\//g).length + 1
  const skip = Math.sqrt(squares.length)
  let patternGrid = []

  for (let i = 0; i < squares.length; i += skip) {
    for (let j = 0; j < arrl; j++) {
      let patternString = ''
      for (var k = 0; k < skip; k++) {
        patternString += squares[i + k].split('/')[j]
      }
      patternGrid.push(patternString)
    }
  }
  return patternGrid.join('/')
}

function getNewPattern (squares, rules) {
  const newPatterns = squares.map(square => getMatch(square, rules))
  return newPatternString(newPatterns)
}

function getMatch (square, rules) {
  return rules[square]
}

function flip (square) {
  return square.split('/').reverse().join('/')
}

function rotate90 (square) {
  return square.split('/')
    .map((row, index, rows) => {
      return rows.map(col => col[index]).join('')
    })
    .reverse()
    .join('/')
}

function updateRules (rules) {
  Object.keys(rules).forEach(element => {
    let tmp = element
    for (let index = 0; index < 4; index++) {
      tmp = rotate90(tmp)
      rules[tmp] = rules[element]
    }
    tmp = flip(tmp)
    rules[tmp] = rules[element]
    for (let index = 0; index < 4; index++) {
      tmp = rotate90(tmp)
      rules[tmp] = rules[element]
    }
  })

  return rules
}

function solve (input, iterations) {
  let pattern = `.#./..#/###`

  let rules = getMatchesArray(input)
  rules = updateRules(rules)

  for (let index = 0; index < iterations; index++) {
    let squares = getSquaresToConvert(pattern)
    pattern = getNewPattern(squares, rules)
  }
  return pattern.match(/#/g).length
}

module.exports = {
  solve
}
