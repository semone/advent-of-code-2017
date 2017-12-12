function checkConnections (connections, connection, mySet) {
  mySet = mySet || [0]

  const connectedItem = connections[connection].filter(c => !mySet.includes(c))
  if (connectedItem) {
    for (let index = 0; index < connectedItem.length; index++) {
      const element = connectedItem[index]
      mySet.push(element)
      checkConnections(connections, element, mySet)
    }
  }

  return (new Set(mySet))
}

function getConnections (input) {
  return input.trim().split('\n')
    .reduce((arr, element, index) => {
      arr[index] = element.split(' <-> ')[1].split(', ').map(Number)
      return arr
    }, {})
}

function solvePart1 (input) {
  const connections = getConnections(input)
  return checkConnections(connections, '0').size
}

function solvePart2 (input) {
  const connections = getConnections(input)
  let proccessed = []
  let groups = 0
  while (proccessed.length !== Object.keys(connections).length) {
    const nextToProccess = Object.keys(connections).map(Number).find(e => !proccessed.includes(e))
    proccessed.push(...checkConnections(connections, nextToProccess, [nextToProccess]))
    groups++
  }

  return groups
}

module.exports = {
  solvePart1,
  solvePart2
}
