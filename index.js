const fs = require('fs')
const day1 = require('./src/day1/day1')
const day2 = require('./src/day2/day2')
const day3 = require('./src/day3/day3')
const day4 = require('./src/day4/day4')
const day5 = require('./src/day5/day5')
const day6 = require('./src/day6/day6')
const day7 = require('./src/day7/day7')
const day8 = require('./src/day8/day8')

// Day 1
const inputDay1 = fs.readFileSync('./src/day1/day1-input.txt', 'utf-8')
const result11 = day1.solvePart1(inputDay1)
const result12 = day1.solvePart2(inputDay1)

console.log('------> Capcha')
console.log(`Result Day 1 Part 1: ${result11}`)
console.log(`Result Day 1 Part 2: ${result12}\n`)

// Day 2
const inputDay2 = fs.readFileSync('./src/day2/day2-input.txt', 'utf-8')
const result21 = day2.solvePart1(inputDay2)
const result22 = day2.solvePart2(inputDay2)
console.log('------> Corruption Checksum')

console.log(`Result Day 2 Part 1: ${result21}`)
console.log(`Result Day 2 Part 2: ${result22}\n`)

// Day 3
const result31 = day3.solvePart1(361527)
const result32 = day3.solvePart2(361527)
console.log('------> Spiral Memory')

console.log(`Result Day 3 Part 1: ${result31}`)
console.log(`Result Day 3 Part 2: ${result32}\n`)

// Day 4
const inputDay4 = fs.readFileSync('./src/day4/day4-input.txt', 'utf-8')
const result41 = day4.solvePart1(inputDay4)
const result42 = day4.solvePart2(inputDay4)

console.log('------> High-Entropy Passphrases')
console.log(`Result Day 4 Part 1: ${result41}`)
console.log(`Result Day 4 Part 2: ${result42}\n`)

// Day 5
const inputDay5 = fs.readFileSync('./src/day5/day5-input.txt', 'utf-8')
const result51 = day5.solvePart1(inputDay5)
const result52 = day5.solvePart2(inputDay5)

console.log('------> A Maze of Twisty Trampolines, All Alike')
console.log(`Result Day 5 Part 1: ${result51}`)
console.log(`Result Day 5 Part 2: ${result52}\n`)

// Day 6
const inputDay6 = fs.readFileSync('./src/day6/day6-input.txt', 'utf-8')
const result61 = day6.solvePart1(inputDay6)
const result62 = day6.solvePart2(inputDay6)

console.log('------> Memory Reallocation')
console.log(`Result Day 5 Part 1: ${result61}`)
console.log(`Result Day 5 Part 2: ${result62}\n`)

const inputDay7 = fs.readFileSync('./src/day7/day7-input.txt', 'utf-8')

const result71 = day7.solvePart1(inputDay7)

console.log('------> Recursive Circus')
console.log(`Result Day 7 Part 1: ${result71}`)
day7.solvePart2(inputDay7, result71)

const inputDay8 = fs.readFileSync('./src/day8/day8-input.txt', 'utf-8')
const result81 = day8.solve(inputDay8)

console.log('\n------> I Heard You Like Registers')
console.log(`Result Day 8 Part 1: ${result81[0]}`)
console.log(`Result Day 8 Part 2: ${result81[1]}`)
