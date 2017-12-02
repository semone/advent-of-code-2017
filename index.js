const fs = require('fs')
const day1 = require('./src/day1/day1')

// Read file
fs.readFile('./src/day1/day1-input.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  const result1 = day1.solvePart1(data)
  const result2 = day1.solvePart2(data)

  console.log(`Result Day 1 Part 1: ${result1}`)
  console.log(`Result Day 1 Part 2: ${result2}`)
})
