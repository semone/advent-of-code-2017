const INSTRUCTIONS = {
  set: setRegister,
  add: increaseRegister,
  mul: multiplyRegister,
  mod: setRemainderRegister,
  snd: playSound,
  jgz: jump,
  rcv: recoverFrequency
}

function getValue (register, value) {
  const number = parseInt(value)
  return isNaN(number) ? register[value] : number
}

function playSound (data, info) {
  info.lastSoundPlayed = info[data[1]]
  if (info.que) {
    info.related.que.push(getValue(info, data[1]))
    info.sent += 1
  }
  info.nextInstruction = info.nextInstruction + 1
  return info
}

function setRegister (data, info) {
  const setTo = getValue(info, data[2])
  info[data[1]] = setTo
  info.nextInstruction = info.nextInstruction + 1
  return info
}

function increaseRegister (data, info) {
  const increaseBy = getValue(info, data[2])
  info[data[1]] += increaseBy
  info.nextInstruction = info.nextInstruction + 1
  return info
}

function multiplyRegister (data, info) {
  const multiplyBy = getValue(info, data[2])

  info[data[1]] *= multiplyBy

  info.nextInstruction = info.nextInstruction + 1
  return info
}

function setRemainderRegister (data, info) {
  const divideBy = getValue(info, data[2])
  info[data[1]] %= divideBy

  info.nextInstruction = info.nextInstruction + 1
  return info
}

function recoverFrequency (data, info) {
  if (info.related) {
    if (info.que.length > 0) {
      info[data[1]] = info.que.shift()
      info.nextInstruction = info.nextInstruction + 1
      info.stop = false
    } else {
      info.stop = true
    }
    return info
  } else {
    if (info[data[1]] !== 0) {
      info.break = true
    }
    info.nextInstruction = info.nextInstruction + 1

    return info
  }
}

function jump (data, info) {
  const jumpTo = getValue(info, data[2])
  if (getValue(info, data[1]) > 0) {
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
    lastSoundPlayed: null,
    nextInstruction: 0,
    break: false
  }

  while (true) {
    info = INSTRUCTIONS[inst[info.nextInstruction][0]](inst[info.nextInstruction], info)

    if (info.break || info.nextInstruction >= inst.length || info.nextInstruction < 0) {
      break
    }
  }

  return info.lastSoundPlayed
}

function solvePart2 (input) {
  const inst = input
    .trim()
    .split('\n')
    .map(instruction => {
      return instruction.split(' ')
    })

  let infoProgram0 = {
    nextInstruction: 0,
    stop: false,
    p: 0,
    sent: 0,
    que: []
  }

  let infoProgram1 = {
    nextInstruction: 0,
    stop: false,
    p: 1,
    sent: 0,
    que: []
  }

  infoProgram0.related = infoProgram1
  infoProgram1.related = infoProgram0

  while (true) {
    infoProgram1 = INSTRUCTIONS[inst[infoProgram1.nextInstruction][0]](inst[infoProgram1.nextInstruction], infoProgram1)
    infoProgram0 = INSTRUCTIONS[inst[infoProgram0.nextInstruction][0]](inst[infoProgram0.nextInstruction], infoProgram0)

    if (infoProgram1.stop && infoProgram0.stop) {
      break
    }
  }

  return infoProgram1.sent
}

module.exports = {
  solvePart1,
  solvePart2
}
