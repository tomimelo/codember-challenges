import { colors } from './colors.js'

function solver() {
  const {zebra, zebraLength} = colors.reduce(({currentZebra, currentZebraLength, zebra, zebraLength}, color) => {
    if (currentZebra.length < 2 || color === currentZebra.shift()) {
      currentZebraLength++
    } else {
      currentZebraLength = 2
    }
    currentZebra.push(color)

    if (currentZebraLength >= zebraLength) {
      zebra = [...currentZebra]
      zebraLength = currentZebraLength
    }

    return {
      currentZebra,
      currentZebraLength,
      zebra,
      zebraLength
    }
  }, {currentZebra: [], currentZebraLength: 0, zebra: [], zebraLength: 0})

  return `${zebraLength}@${zebra.at(-1)}`

}

export const challenge03 = {
  name: "Challenge 03",
  solver,
};