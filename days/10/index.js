const readInput = require('../readInput')

const solution = (data) => {
  const lines = data.split(/\r?\n/).map(Number)

  const max = Math.max(...lines) + 3

  const sorted = lines.sort((a, b) =>  a - b)
  sorted.unshift(0)
  sorted.push(max)
  const diffs = {1: 0, 3: 0}

  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = Number(sorted[i+1] - sorted[i])
    diffs[diff] = diffs[diff] + 1
  }

  return diffs[1] * diffs[3]
}

const solution2 = (data) => {
  const lines = data.split(/\r?\n/).map(Number)

  const max = Math.max(...lines) + 3

  const sorted = lines.sort((a, b) =>  a - b)
  sorted.unshift(0)
  sorted.push(max)

  const optionsArr = []
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = sorted[i]
    let count = 0;

    for (let j = 1; j <= 3; j++) {
      if (sorted.includes(current + j)) {
        count ++
      }
    }

    optionsArr.push(count)
  }

  
}

const solution3 = (data) => {
  const lines = data.split(/\r?\n/).map(Number)

  const max = Math.max(...lines) + 3

  const sorted = lines.sort((a, b) =>  a - b)
  sorted.unshift(0)

  const sequence = []
  let continuous = 1
  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i]
    const next = sorted[i+1]
    const diff = next - current
    if (diff === 1) {
      continuous += 1
    } else {
      if (continuous > 2) {
        sequence.push(continuous)
      }
      continuous = 1
      continue
    }
  }

  const tribonacci = [0, 1, 1, 2, 4, 7, 13, 24]
  const total = sequence.reduce((total, val) => tribonacci[val] * total, 1)

  return total
}

const data = readInput('./input.txt').then((data) => {
  console.log(solution(data))
  console.log(solution3(data))
})