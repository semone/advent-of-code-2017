const fs = require('fs')
const day1 = require('./src/day01/day1')
const day2 = require('./src/day02/day2')
const day3 = require('./src/day03/day3')
const day4 = require('./src/day04/day4')
const day5 = require('./src/day05/day5')
const day6 = require('./src/day06/day6')
const day7 = require('./src/day07/day7')
const day8 = require('./src/day08/day8')
const day9 = require('./src/day09/day9')
const day10 = require('./src/day10/day10')
const day11 = require('./src/day11/day11')
const day12 = require('./src/day12/day12')
const day13 = require('./src/day13/day13')
const day14 = require('./src/day14/day14')
const day15 = require('./src/day15/day15')
const day16 = require('./src/day16/day16')
const day17 = require('./src/day17/day17')
const day18 = require('./src/day18/day18')
const day19 = require('./src/day19/day19')
const day20 = require('./src/day20/day20')
const day21 = require('./src/day21/day21')
const day22 = require('./src/day22/day22')
const day23 = require('./src/day23/day23')
const day24 = require('./src/day24/day24')

// Day 1
const inputDay1 = fs.readFileSync('./src/day01/day1-input.txt', 'utf-8')
const result11 = day1.solvePart1(inputDay1)
const result12 = day1.solvePart2(inputDay1)

console.log('------> Capcha')
console.log(`Result Day 1 Part 1: ${result11}`)
console.log(`Result Day 1 Part 2: ${result12}\n`)

// Day 2
const inputDay2 = fs.readFileSync('./src/day02/day2-input.txt', 'utf-8')
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
const inputDay4 = fs.readFileSync('./src/day04/day4-input.txt', 'utf-8')
const result41 = day4.solvePart1(inputDay4)
const result42 = day4.solvePart2(inputDay4)

console.log('------> High-Entropy Passphrases')
console.log(`Result Day 4 Part 1: ${result41}`)
console.log(`Result Day 4 Part 2: ${result42}\n`)

// Day 5
const inputDay5 = fs.readFileSync('./src/day05/day5-input.txt', 'utf-8')
const result51 = day5.solvePart1(inputDay5)
const result52 = day5.solvePart2(inputDay5)

console.log('------> A Maze of Twisty Trampolines, All Alike')
console.log(`Result Day 5 Part 1: ${result51}`)
console.log(`Result Day 5 Part 2: ${result52}\n`)

// Day 6
const inputDay6 = fs.readFileSync('./src/day06/day6-input.txt', 'utf-8')
const result61 = day6.solvePart1(inputDay6)
const result62 = day6.solvePart2(inputDay6)

console.log('------> Memory Reallocation')
console.log(`Result Day 6 Part 1: ${result61}`)
console.log(`Result Day 6 Part 2: ${result62}\n`)

// Day 7
const inputDay7 = fs.readFileSync('./src/day07/day7-input.txt', 'utf-8')
const result71 = day7.solvePart1(inputDay7)

console.log('------> Recursive Circus')
console.log(`Result Day 7 Part 1: ${result71}`)
day7.solvePart2(inputDay7, result71)

// Day 8
const inputDay8 = fs.readFileSync('./src/day08/day8-input.txt', 'utf-8')
const result81 = day8.solve(inputDay8)

console.log('\n------> I Heard You Like Registers')
console.log(`Result Day 8 Part 1: ${result81[0]}`)
console.log(`Result Day 8 Part 2: ${result81[1]}`)

// Day 9
const inputDay9 = fs.readFileSync('./src/day09/day9-input.txt', 'utf-8')
const result9 = day9.getNumberOfGroups(inputDay9)

console.log('\n------> Stream Processing')
console.log(`Result Day 9 Part 1: ${result9[0]}`)
console.log(`Result Day 9 Part 2: ${result9[1]}`)

// Day 10
const inputDay10 = fs.readFileSync('./src/day10/day10-input.txt', 'utf-8')
const listSize = 256

const result101 = day10.solvePart1(inputDay10, listSize)
const result102 = day10.solvePart2(inputDay10, listSize)

console.log('\n------> Knot Hash')
console.log(`Result Day 10 Part 1: ${result101}`)
console.log(`Result Day 10 Part 2: ${result102}`)

// Day 11
const inputDay11 = fs.readFileSync('./src/day11/day11-input.txt', 'utf-8')
const result111 = day11.solve(inputDay11)

console.log('\n------> Hex Ed')
console.log(`Result Day 11 Part 1: ${result111[0]}`)
console.log(`Result Day 11 Part 2: ${result111[1]}`)

// Day 12
const inputDay12 = fs.readFileSync('./src/day12/day12-input.txt', 'utf-8')
const result121 = day12.solvePart1(inputDay12)
const result122 = day12.solvePart2(inputDay12)

console.log('\n------> Digital Plumber')
console.log(`Result Day 12 Part 1: ${result121}`)
console.log(`Result Day 11 Part 2: ${result122}`)

// Day 13
const inputDay13 = fs.readFileSync('./src/day13/day13-input.txt', 'utf-8')

const result131 = day13.solvePart1(inputDay13)
const result132 = day13.solvePart2(inputDay13)

console.log('\n------> Packet Scanners')
console.log(`Result Day 13 Part 1: ${result131}`)
console.log(`Result Day 13 Part 2: ${result132}`)

// Day 14
const inputDay14 = 'hxtvlmkl'

const result141 = day14.solvePart1(inputDay14, 128)
const result142 = day14.solvePart2(inputDay14, 128)

console.log('\n------> Disk Defragmentation')
console.log(`Result Day 14 Part 1: ${result141}`)
console.log(`Result Day 14 Part 2: ${result142}`)

// Day 15
const inputDay15 = [289, 629]

const result151 = day15.solvePart1(inputDay15)
const result152 = day15.solvePart2(inputDay15)

console.log('\n------> Dueling Generators')
console.log(`Result Day 15 Part 1: ${result151}`)
console.log(`Result Day 15 Part 2: ${result152}`)

// Day 16

const inputDay16 = fs.readFileSync('./src/day16/day16-input.txt', 'utf-8')
const danceSequence = 'abcdefghijklmnop'
const result161 = day16.solvePart1(inputDay16, danceSequence)
const result162 = day16.solvePart2(inputDay16, danceSequence)

console.log('\n------> Permutation Promenade')
console.log(`Result Day 16 Part 1: ${result161}`)
console.log(`Result Day 16 Part 2: ${result162}`)

// Day 17

const inputDay17 = 366
const result171 = day17.solvePart1(inputDay17)
const result172 = day17.solvePart2(inputDay17)

console.log('\n------> Spinlock')
console.log(`Result Day 17 Part 1: ${result171}`)
console.log(`Result Day 17 Part 2: ${result172}`)

// Day 18

const inputDay18 = fs.readFileSync('./src/day18/day18-input.txt', 'utf-8')

const result181 = day18.solvePart1(inputDay18)
const result182 = day18.solvePart2(inputDay18)

console.log('\n------> Duet')
console.log(`Result Day 18 Part 1: ${result181}`)
console.log(`Result Day 18 Part 2: ${result182}`)

// Day 19
const inputDay19 = fs.readFileSync('./src/day19/day19-input.txt', 'utf-8')

const result19 = day19.solve(inputDay19)

console.log('\n------> A Series of Tubes')
console.log(`Result Day 19 Part 1: ${result19[0]}`)
console.log(`Result Day 19 Part 2: ${result19[1]}`)

// Day 20
const inputDay20 = fs.readFileSync('./src/day20/day20-input.txt', 'utf-8')

const result201 = day20.solvePart1(inputDay20)
const result202 = day20.solvePart2(inputDay20)

console.log('\n------> Particle Swarm')
console.log(`Result Day 20 Part 1: ${result201}`)
console.log(`Result Day 20 Part 2: ${result202}`)

// Day 21
const inputDay21 = fs.readFileSync('./src/day21/day21-input.txt', 'utf-8')

const result211 = day21.solve(inputDay21, 5)
const result212 = day21.solve(inputDay21, 18)

console.log('\n------> Fractal Art')
console.log(`Result Day 21 Part 1: ${result211}`)
console.log(`Result Day 21 Part 2: ${result212}`)

// Day 22
const inputDay22 = fs.readFileSync('./src/day22/day22-input.txt', 'utf-8')

const result221 = day22.solvePart1(inputDay22, 10000)
const result222 = day22.solvePart2(inputDay22, 10000000)

console.log('\n------> Sporifica Virus')
console.log(`Result Day 22 Part 1: ${result221}`)
console.log(`Result Day 22 Part 2: ${result222}`)

// Day 23
const inputDay23 = fs.readFileSync('./src/day23/day23-input.txt', 'utf-8')

const result231 = day23.solvePart1(inputDay23)
const result232 = day23.solvePart2(inputDay23)

console.log('\n------> Coprocessor Conflagration')
console.log(`Result Day 23 Part 1: ${result231}`)
console.log(`Result Day 23 Part 2: ${result232}`)

// Day 24
const inputDay24 = fs.readFileSync('./src/day24/day24-input.txt', 'utf-8')

const result241 = day24.solve(inputDay24)

console.log('\n------> Coprocessor Conflagration')
console.log(`Result Day 24 Part 1,2: ${result241}`)
