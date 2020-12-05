const readInput = require('../readInput')

const solution = () => {
  
}

const data = readInput('./input.txt').then((data) => {
  const lines = data.split(/\r?\n/)
  
  console.log(solution(lines))
})
