const readInput = require('../readInput')

const findValid = (rules) => {
  const regex = /([0-9]*)-([0-9]*) ([a-z]): ([a-z]*)/
  
  let valid = 0
  rules.forEach((item) => {
    if (!item) return
    [rule, min, max, char, password] = regex.exec(item)
    const count = new RegExp(`{${char}}*`,'g')
    const chars = password.split(char).length - 1
    if (chars >= min && chars <= max) {
      valid++
    }
  })

  return valid
}

const findValid2 = (rules) => {
  const regex = /([0-9]*)-([0-9]*) ([a-z]): ([a-z]*)/
  
  let valid = 0
  rules.forEach((item) => {
    if (!item) return
    [rule, min, max, char, password] = regex.exec(item)
    const count = new RegExp(`{${char}}*`,'g')
    const chars = password.split(char).length - 1
    if ((password[min-1] === char || password[max-1] === char) && password[min-1] !== password[max-1]) {
      valid++
    }
  })

  return valid
}

const data = readInput('./input.txt').then((data) => {
  const lines = data.split(/\r?\n/)
  
  console.log(findValid(lines))
  console.log(findValid2(lines))
}) 
