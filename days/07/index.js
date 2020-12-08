const readInput = require('../readInput')

const myBag = 'shiny gold'

const solution = (data, myBag) => {
  const regex = new RegExp(/^(\w* \w*)/)

  const lines = data.split(/\r?\n/)

  const bags = new Set([myBag])
  const bagNames = bags.values()
  let next = bagNames.next()

  do {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const bagRegex = `((\\d+) (${next.value}) bag[s]?)`
      const re = new RegExp(bagRegex)
      const bagMatch = line.match(re)

      if (bagMatch) {
        const match = regex.exec(line)
        bags.add(match[1])
      }
    }

    next = bagNames.next()
  } while (!next.done);
  
  // Subtract 1 to remove the Shiny Gold bag
  return bags.size - 1
}

const solution2 = (data, myBag) => {
  const bags = new Set([myBag])
  const bagNames = bags.values()
  let next = bagNames.next()

  do {
    const lineRegex = `^${next.value} bags contain.*$`
    const regex = new RegExp(lineRegex, 'gm')
    const match = regex.exec(data)

    const regex2 = new RegExp(/((\d+) (\w+ \w+) bags?)/g)
    let matches = regex2.exec(match[0])

    while (matches != null) {
      console.log(matches[2], matches[3])
      bags.add(matches[3])
      matches = regex2.exec(match[0]);
    }  
  
    next = bagNames.next()
  } while (!next.done);
}

const data = readInput('./input.txt').then((data) => {
  console.log('Number of Bags: ', solution(data, myBag))
  console.log('Required bags: ', solution2(data, myBag))
})