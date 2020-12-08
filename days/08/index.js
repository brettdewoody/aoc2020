const readInput = require('../readInput')

const solution = (data) => {
  const lines = data.split(/\r?\n/)

  let acc = 0
  let i = 0
  const sequence = new Set()
  let repeat = false
  const regex = new RegExp(/(nop|acc|jmp) ([+|-]\d+)/)

  do {
    const match = regex.exec(lines[i])
    sequence.add(i)

    switch (match[1]) {
      case 'acc':
        acc = eval(`acc ${match[2]}`)
        i++
        break
      case 'jmp':
        i = eval(`i ${match[2]}`)
        break
      case 'nop':
        i++
        break
    }

    repeat = sequence.has(i)

  } while (!repeat)

  return acc
}

const solution2 = (data) => {
  const lines = data.split(/\r?\n/)
  const regex = new RegExp(/(nop|acc|jmp) ([+|-]\d+)/)

  for (let j = 0; j < lines.length; j++) {
    let acc = 0
    let i = 0
    const sequence = new Set()
    let repeat = false

    do {
      const match = regex.exec(lines[i])
      sequence.add(i)
  
      switch (match[1]) {
        case 'acc':
          acc = eval(`acc ${match[2]}`)
          i++
          break
        case 'jmp':
          if (i === j) {
            i++
          } else {
            i = eval(`i ${match[2]}`)
          }
          
          break
        case 'nop':
          if (i === j) {
            i = eval(`i ${match[2]}`)
          } else {
            i++
          }
          break
      }
  
      repeat = sequence.has(i)
    } while (!repeat && i < lines.length)
  
    if (i === lines.length) {
      return acc
    }
  }
}

const data = readInput('./input.txt').then((data) => {
  console.log('Accumulator', solution(data))
  console.log('Accumulator', solution2(data))
})