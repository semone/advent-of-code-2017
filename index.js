const fs = require('fs')
const day1 = require('./src/day1/day1')
const day2 = require('./src/day2/day2')
const day3 = require('./src/day3/day3')
const day4 = require('./src/day4/day4')

// Day 1
fs.readFile('./src/day1/day1-input.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  const result1 = day1.solvePart1(data)
  const result2 = day1.solvePart2(data)

  console.log(`Result Day 1 Part 1: ${result1}`)
  console.log(`Result Day 1 Part 2: ${result2}`)
})

// Day 2
fs.readFile('./src/day2/day2-input.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  const result1 = day2.solvePart1(data)
  const result2 = day2.solvePart2(data)

  console.log(`Result Day 2 Part 1: ${result1}`)
  console.log(`Result Day 2 Part 2: ${result2}`)
})

// Day 3
const result1 = day3.solvePart1(361527)
const result2 = day3.solvePart2(361527)

console.log(`Result Day 3 Part 1: ${result1}`)
console.log(`Result Day 3 Part 2: ${result2}`)

// Day 4
fs.readFile('./src/day4/day4-input.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }
  const result41 = day4.solvePart1(data)
  const result42 = day4.solvePart2(data)

  console.log(`Result Day 4 Part 1: ${result41}`)
  console.log(`Result Day 4 Part 2: ${result42}`)
})
