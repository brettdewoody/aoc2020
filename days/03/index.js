const readInput = require('../readInput')

const solution = (lines, x, y) => {
  let trees = 0
  let row = 0

  for (let i = 0; i < lines.length; i += y) {
    const line = lines[i]
    const pos = (x * row) % line.length
    if (line[pos] === '#') {
      trees++
    }
    row++
  }

  return trees
}

const data = readInput('./input.txt').then((data) => {
  const lines = data.split(/\r?\n/)
  
  console.log(solution(lines, 3, 1))

  console.log(
    solution(lines, 1, 1) *
    solution(lines, 3, 1) *
    solution(lines, 5, 1) *
    solution(lines, 7, 1) *
    solution(lines, 1, 2)
  )
})
