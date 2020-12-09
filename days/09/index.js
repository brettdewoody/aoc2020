const readInput = require('../readInput')

const solution = (data, preamble) => {
  const lines = data.split(/\r?\n/)

  for (let i = preamble; i < lines.length; i++) {
    let match = false
    const number = Number(lines[i])
    const preambleArr = lines.slice(i - preamble, i).map(Number)

    for (let j = 0; j < preambleArr.length; j++) {
      const num1 = Number(preambleArr[j])
      const remainder = number - num1

      if (preambleArr.includes(remainder) && num1 !== remainder) {
        match = true
        break
      }
    }
    
    if (!match) {
      return number
    }
  }
}

const solution2 = (data, invalid) => {
  const lines = data.split(/\r?\n/)
  for (i = 0; i < lines.length; i++) {
    let j = 1
    let total = Number(lines[i])
    do {
      total += Number(lines[i + j])
      if (total === invalid) {
        const subArr = lines.slice(i, i+j)
        return (Math.max(...subArr) + Math.min(...subArr))
      }
      j++
    } while (total < invalid && i + j < lines.length - 1)
  }
}

const data = readInput('./input.txt').then((data) => {
  const invalid = solution(data, 25)
  console.log('First number', invalid)
  console.log('Encryption Weakness', solution2(data, invalid))
})