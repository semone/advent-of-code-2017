function cleanData (data) {
  return data
    .trim()
    .split('\n')
    .map(element => {
      const values = element.split('/').map(Number)
      return { a: values[0], b: values[1] }
    })
}

function getInfo (data, bridges, connectTo, strength, bridgeLength) {
  for (let i = 0; i < data.length; i++) {
    if (isConnection(data[i], connectTo)) {
      let newStrength = strength + data[i].a + data[i].b
      let newBridgeLength = bridgeLength + 1

      let left = data.slice()
      left.splice(i, 1)

      let newConnector = data[i].a === connectTo ? data[i].b : data[i].a

      getInfo(left, bridges, newConnector, newStrength, newBridgeLength)
    }
  }

  bridges.push([strength, bridgeLength])
  return bridges
}

function isConnection (element1, connectTo) {
  if (element1.a === connectTo || element1.b === connectTo) {
    return true
  }
}

function solve (input) {
  let data = cleanData(input)
  let bridges = []
  let info = getInfo(data, bridges, 0, 0, 0)

  const maxVal = info.reduce((max, element) => {
    return Math.max(element[0], max)
  }, 0)

  const maxLength = info.reduce((max, element) => {
    return Math.max(element[1], max)
  }, 0)

  const maxValmaxLength = info
    .filter(elem => {
      return elem[1] === maxLength
    })
    .reduce((max, element) => {
      return Math.max(element[0], max)
    }, 0)

  return [maxVal, maxValmaxLength]
}

module.exports = {
  solve
}
