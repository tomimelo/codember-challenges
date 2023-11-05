import { colors } from './colors.js'

function solver() {
  //currentZebra: It's going to remember the current color pattern being analyzed
  //currentZebraLength: It's going to keep count of the currentZebra length
  //zebra: The color pattern of the longest zebra
  //zebraLength: The length of the longest zebra
  const {zebra, zebraLength} = colors.reduce(({currentZebra, currentZebraLength, zebra, zebraLength}, color) => {

    //If
    //We are starting with the first colors, the currentZebra array is going to be empty
    //OR
    //The current color being analyzed is equal to the color of the first position in the array (that is being extracted from the array, because of the .shift() method) and not equal to the remaining color in the array
    //With either of this conditions being true we are going to add 1 to the current counter because it means the zebra pattern is on going
    if (currentZebra.length < 2 || (color === currentZebra.shift() && color !== currentZebra[0])) {
      currentZebraLength++
    } else {
      //If not, we reset the counter
      currentZebraLength = 2
    }
    //We add the color to the end of the array to keep the pattern
    currentZebra.push(color)

    //If the current length is greater or equal than the max length, we save the new values.
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