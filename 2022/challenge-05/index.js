import { mecenas } from './mecenas.js'

function solver() {
  let survivorsIndexes = [...mecenas.keys()]
  while (survivorsIndexes.length !== 1) {
    const lastSurvivor = survivorsIndexes.length % 2 === 0 ? null : survivorsIndexes.pop()
    survivorsIndexes = survivorsIndexes.filter((survivorIndex, index) => index % 2 === 0)
    if (lastSurvivor) survivorsIndexes.unshift(lastSurvivor)
  }
  const [survivorIndex] = survivorsIndexes
  return `submit ${mecenas[survivorIndex]}-${survivorIndex}`
}

export const challenge05 = {
  name: "Challenge 05",
  solver,
};