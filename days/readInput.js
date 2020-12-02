const fs = require('fs')

const readInput = async (filename) => {
  const data = fs.readFileSync(filename, 'utf8', (err, data) => {
    if (err) throw err
    console.log('OK: ' + filename)
  }) 
  
  return data
}

module.exports = readInput
