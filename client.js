const fs = require('fs')

const form = new FormData()

const paths = [
[
  '/home/ivan/Documents/trabalho/garden/inputs/air-europe/comuniquese_air-europe.xlsx',
  '/home/ivan/Documents/trabalho/garden/inputs/air-europe/rede_air-europe.csv'
]
]

paths[0].forEach((p, i) => {
  form.append(`file_${i + 1}`, fs.readFileSync(p))
})

const event = {
  body: 
}