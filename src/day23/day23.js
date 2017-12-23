const INSTRUCTIONS = {
  set: setRegister,
  sub: decreaseRegister,
  mul: multiplyRegister,
  jnz: jump
}

function getValue (register, value) {
  const number = parseInt(value)
  return isNaN(number) ? register[value] || 0 : number
}

function setRegister (data, info) {
  const setTo = getValue(info, data[2])
  info[data[1]] = setTo
  info.nextInstruction = info.nextInstruction + 1
  return info
}

function decreaseRegister (data, info) {
  const decreaseBy = getValue(info, data[2])
  info[data[1]] -= decreaseBy
  info.nextInstruction = info.nextInstruction + 1
  return info
}

function multiplyRegister (data, info) {
  const multiplyBy = getValue(info, data[2])

  info[data[1]] *= multiplyBy

  info.nextInstruction = info.nextInstruction + 1
  info.multCount++
  return info
}

function jump (data, info) {
  const jumpTo = getValue(info, data[2])
  if (getValue(info, data[1]) !== 0) {
    info.nextInstruction = info.nextInstruction + jumpTo
  } else {
    info.nextInstruction = info.nextInstruction + 1
  }
  return info
}

function solvePart1 (input) {
  const inst = input
    .trim()
    .split('\n')
    .map(instruction => {
      return instruction.split(' ')
    })

  let info = {
    nextInstruction: 0,
    multCount: 0
  }

  while (true) {
    info = INSTRUCTIONS[inst[info.nextInstruction][0]](inst[info.nextInstruction], info)
    if (info.nextInstruction >= inst.length || info.nextInstruction < 0) {
      break
    }
  }

  return info.multCount
}

function solvePart2 () {
  let b = 93 * 100 + 100000
  let c = 93 * 100 + 100000 + 17000
  let f = 0
  let d = 0
  let h = 0

  while (b <= c) {
    f = 1
    d = 2
    for (d; d < b; d++) {
      if (b % d === 0) {
        f = 0
      }
    }
    if (f === 0) {
      h++
    }
    b += 17
  }

  return h
}

module.exports = {
  solvePart1,
  solvePart2
}
