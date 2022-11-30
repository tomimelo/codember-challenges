import { mecenas } from './mecenas.js'

function solver() {
  let survivors = [...mecenas.keys()]
  while (survivors.length !== 1) {
    const lastSurvivor = survivors.length % 2 === 0 ? null : survivors.pop()
    survivors = survivors.filter((survivor, index) => index % 2 === 0)
    if (lastSurvivor) survivors.unshift(lastSurvivor)
  }
  const [survivorIndex] = survivors
  return `submit ${mecenas[survivorIndex]}-${survivorIndex}`
}

export const challenge05 = {
  name: "Challenge 05",
  solver,
};