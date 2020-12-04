const readInput = require('../readInput')

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const validation = {
  byr: (val) => val >= 1920 && val <= 2020,
  iyr: (val) => val >= 2010 && val <= 2020,
  eyr: (val) => val >= 2020 && val <= 2030,
  hgt: (val) => {
    const regex = new RegExp('^([0-9]{2,3})(cm|in)$')
    const match = regex.exec(val)
    if (match) {
      const [orig, hgt, unit] = match
      if ((unit === 'cm' && hgt >= 150 && hgt <= 193) || 
      (unit === 'in' && hgt >= 59 && hgt <= 76)) {
        return true
      }
    }
    return false
  },
  hcl: (val) => {
    const regex = new RegExp('#([0-9a-f]{6})')
    return val.match(regex)
  },
  ecl: (val) => (['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']).includes(val),
  pid: (val) => val.length === 9
}

const solution = (data, required, validation) => {
  const items = data.split(/\n\n/).map((set) => set.replace(/\r?\n/g, ' '))
  const regex = new RegExp(`^${required.reduce((regex, req) => regex += `(?=.*\\b${req}:(#?\\w*)\\b)`, '')}.+`)

  let valid = 0

  for (let i = 0; i < items.length; i++) {
    let isValid = true
    const matches = regex.exec(items[i])
  
    if (matches) {
      const [orig, ...groups] = matches
      for (let j = 0; j < required.length; j++) {
        const validate = validation[required[j]]
        const value = groups[j]

        if (!validate(value)) {
          isValid = false
          break
        }
      }

      if (isValid) {
        valid++
      }
    }
  }
  
  return valid
}

const data = readInput('./input.txt').then((data) => {
  console.log(solution(data, required, validation))
})
