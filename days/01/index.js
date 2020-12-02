const readInput = require('../readInput')

const expenseReport2X = (input, offset = 0, total = 2020) => {
  for (let i = offset; i < input.length; i++) {
    const remainder = total - input[i]
    const match = input.includes(remainder, i+1)
    if (match) {
      return remainder * input[i]
    }
  }
  return null
}

const expenseReport3X = (input, total = 2020) => {
  for (let i = 0; i < input.length; i++) {
    const remainder = total - input[i]
    const match = expenseReport2X(input, i, remainder)
    if (match) {
      return match * input[i] 
    }
  }
}


const data = readInput('./input.txt').then((data) => {
  const lines = data.split(/\r?\n/).map(Number)

  console.log(expenseReport2X(lines))
  console.log(expenseReport3X(lines))
})  
