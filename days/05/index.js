const readInput = require('../readInput')

const solution = (lines, totalRows, totalColumns) => {
  let seatsTaken = []

  lines.forEach((line) => {
    if (!line) return

    let rowStart = 1
    let columnStart = 1
    let rows = totalRows
    let columns = totalColumns
    const rowMap = line.substring(0,7)
    const columnMap = line.substring(7,10)

    for (let k = 0; k < rowMap.length; k++) {
      rows = rows / 2
      rowStart = rowMap[k] === "B" ? rowStart + rows : rowStart
    }

    for (let k = 0; k < columnMap.length; k++) {
      columns /= 2
      columnStart = columnMap[k] === "R" ? columnStart + columns : columnStart
    }

    seatsTaken.push(((rowStart-1) * 8) + (columnStart-1))
  })

  const seatChart = seatsTaken.sort((a, b) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })
  
  let mySeat = null
  for (l = 0; l < seatChart.length; l++) {
    if (seatChart[l] !== seatChart[0] + l) {
      mySeat = seatChart[l] - 1
      break
    }
  }

  return {
    maxSeat: seatChart[seatChart.length - 1], 
    mySeat
  }
}

const data = readInput('./input.txt').then((data) => {
  const lines = data.split(/\r?\n/)
  
  console.log(solution(lines, 128, 8))
})
