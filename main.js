const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')

let lastHole;
let timeUp = false


const randTime = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

const randHole = (holes) => {
  const index = Math.floor(Math.random() * holes.length)
  const hole = holes[index]
  if (hole === lastHole) {
    console.log("Thats the same one")
    return randHole(hole)
  }
  lastHole = hole
  return hole
}

const peep = () => {
  const time = randTime(200, 1000)
  const hole = randHole(holes)
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up')
    if (!timeUp) peep()
  }, time);
}