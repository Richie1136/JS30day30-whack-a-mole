const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')

let lastHole;


const randTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const randHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length)
  const hole = holes[index]
  console.log(hole)
  if (hole === lastHole) {
    console.log("Thats the same one")
    randHole(hole)
  }
  lastHole = hole
}