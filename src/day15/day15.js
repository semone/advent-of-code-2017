function solvePart1 (startValues) {
  let factorA = 16807
  let factorB = 48271
  let sum = 0
  let a = startValues[0]
  let b = startValues[1]

  const reminderValue = 2147483647

  for (let i = 0; i < 40000000; i++) {
    a = (factorA * a) % reminderValue
    b = (factorB * b) % reminderValue
    sum += (a & 0xFFFF) === (b & 0xFFFF)
  }

  return sum
}

function solvePart2 (startValues) {
  let factorA = 16807
  let factorB = 48271
  let sum = 0
  let a = startValues[0]
  let b = startValues[1]

  const reminderValue = 2147483647

  for (let i = 0; i < 5000000; i++) {
    while (true) {
      a = (factorA * a) % reminderValue
      if (a % 4 === 0) {
        break
      }
    }

    while (true) {
      b = ((factorB * b) % reminderValue)

      if (b % 8 === 0) {
        break
      }
    }

    sum += (a & 0xFFFF) === (b & 0xFFFF)
  }

  return sum
}

module.exports = {
  solvePart1,
  solvePart2
}
