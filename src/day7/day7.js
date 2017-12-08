// TODO fix this mess...
function solvePart1 (input) {
  const possibleBottoms = []
  const programs = []
  input.split('\n')
    .filter((element) => {
      return element.indexOf('->') !== -1
    })
    .forEach((element) => {
      possibleBottoms.push(...element.split('->')[0].match(/[a-zA-Z]+/g))
      programs.push(...element.split(' -> ')[1].split(', '))
    })

  let val = ''
  possibleBottoms.forEach(element => {
    if (programs.indexOf(element) === -1) {
      val = element
    }
  })
  return val
}

function solvePart2 (input, base) {
  const cleanedInput = input.trim().split('\n')
    .map(element => {
      const obj = {}
      obj['value'] = element.split(' -> ')[0].match(/\d+/).toString()
      obj['children'] = (element.split(' -> ')[1]) || null
      obj['key'] = element.split(' -> ')[0].match(/[a-zA-Z]+/g).toString()
      return obj
    })

  const baseChildren = getBaseChildren(cleanedInput, base)

  baseChildren.reduce((obj, element) => {
    const sum = getTotalSum(cleanedInput, element)
    obj[element] = sum
    return obj
  }, {})
}

function getBaseChildren (input, base) {
  return input.find(element => {
    return element.key === base
  }).children.split(', ')
}

function getCorrectValue ([x, y, z]) {
  return x === y ? x : z
}

function findOutlier (arr) {
  const normal = getCorrectValue(arr)
  return {
    index: arr.findIndex(x => x !== normal),
    normal
  }
}

function getTotalSum (input, child) {
  let sum = 0
  const t = input.find(el => {
    if (el.key === child) return el
  })
  sum += parseInt(t.value)
  if (t.children) {
    let y = []
    t.children.split(', ').forEach(c => {
      const val = getTotalSum(input, c)
      sum += val
      y.push(val)
    })

    if (((new Set(y)).size !== 1)) {
      const outlier = findOutlier(y)

      const elKey = t.children.split(', ')[outlier.index]

      const element = input.find(el => {
        if (el.key === elKey) return el
      })
      console.log(`Result Day 7 Part 2: ${parseInt(element.value) + (outlier.normal - y[0])}`)

      element.value = parseInt(element.value) + outlier.normal - y[0]
    }
  }
  return sum
}

module.exports = {
  solvePart1,
  solvePart2
}
