function solve (input) {
  let register = {}
  let alltimeMax = 0
  input.trim()
    .split('\n')
    .map(line => {
      const data = line.split(' ')
      const val1 = data[0]
      const val2 = data[4]

      if (!register[val1]) {
        register[val1] = 0
      }
      if (!register[val2]) {
        register[val2] = 0
      }

      if (eval(`${register[val2]} ${data[5]}  ${data[6]}`)) {
        if (data[1] === 'dec') {
          register[val1] -= parseInt(data[2])
        } else {
          register[val1] += parseInt(data[2])
        }
        const possibleNewMax = Object.values(register).reduce((a, b) => Math.max(a, b))
        alltimeMax = possibleNewMax > alltimeMax ? possibleNewMax : alltimeMax
      }
    })
  const max = Object.values(register)
    .reduce((a, b) => Math.max(a, b))
  return [max, alltimeMax]
}

module.exports = {
  solve
}
