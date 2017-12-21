function manhattanDistance (coord) {
  return Math.abs(coord[0]) + Math.abs(coord[1]) + Math.abs(coord[2])
}

function newState (particle) {
  particle[1][0] += particle[2][0]
  particle[1][1] += particle[2][1]
  particle[1][2] += particle[2][2]

  particle[0][0] += particle[1][0]
  particle[0][1] += particle[1][1]
  particle[0][2] += particle[1][2]

  return particle
}

function cleanInput (input) {
  return input
    .trim()
    .split('\n')
    .map(particle => {
      return particle.split(', ')
        .map(info => {
          return info
            .slice(3)
            .slice(0, -1)
            .split(',')
            .map(Number)
        })
    })
}

function solvePart1 (input) {
  let particles = cleanInput(input)
  let info = {distance: -1, index: 0}
  let particle
  for (let i = 0; i < particles.length * 10; i++) {
    particles.forEach((element, index) => {
      particle = newState(element)
      const particleDistance = manhattanDistance(particle[0])

      if ((info.distance < 0 || particleDistance < info.distance) && i === (particles.length * 10 - 1)) {
        info.distance = particleDistance
        info.index = index
      }
    })
    // Remove duplicates
  }
  return info.index
}

function solvePart2 (input) {
  let particles = cleanInput(input)
  let particle
  let visited = []
  for (let i = 0; i < particles.length * 10; i++) {
    visited = []

    particles.forEach((element, index) => {
      particle = newState(element)
      const position = particle[0]

      visited.push(position.toString())
    })

    visited.forEach((particle, index) => {
      const visitedIndex = visited.indexOf(particle)
      if (visitedIndex !== index) {
        particles[index] = 'removed'
        particles[visitedIndex] = 'removed'
      }
    })
    particles = particles.filter(p => p !== 'removed')
  }
  return particles.length
}

module.exports = {
  solvePart1,
  solvePart2
}
