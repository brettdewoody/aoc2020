const readInput = require('../readInput')


const solution = (data, validation) => {
  const items = data.split(/\n\n/)
  let total = 0

  items.forEach((item) => {
    const answers = item.replace(/\r?\n/g, '')
    const questions = new Set(answers.split(''))
    total += questions.size
  })

  return total
}

const solution2 = (data, validation) => {
  const items = data.split(/\n\n/)
  let total = 0

  items.forEach((item) => {
    const answers = item.split(/\r?\n/g).map((person) => person.split(''))
    const result = answers.shift().reduce((res, v) => {
      if (res.indexOf(v) === -1 && answers.every((a) => (
          a.indexOf(v) !== -1
      ))) res.push(v);
      return res;
  }, []);
    total += result.length
  })

  return total
}

const data = readInput('./input.txt').then((data) => {
  console.log('Number of Yes: ', solution(data))
  console.log('All Yes: ', solution2(data))
})
