import { loadData } from "../../utils/dataLoader.js";

//Symbols operations transformed in functions
const operations = {
  "#": (value) => value + 1,
  "@": (value) => value - 1,
  "*": (value) => value * value,
  "&": (value) => `${value}`
}

async function solver() {
  // Load message_02.txt
  const rawMessage = await loadData("2023/challenge-02/message_02.txt")

  //Split symbols
  const symbols = rawMessage.split('')

  //Process symbols
  const {decoded} = symbols.reduce((state, symbol) => {

    //Get function of given symbol and apply current value
    const result = operations[symbol](state.currentValue)
    //If it's a string it means that should be printed... so it's added to decoded string and parsed back to a number
    if (typeof result === 'string') {
      return {
        currentValue: Number(result),
        decoded: state.decoded + result
      }
    }
    //If it's a number it means that should still be processed so set it as current value
    return {
      ...state,
      currentValue: result
    }
  }, {currentValue: 0, decoded: ''})

  return `submit ${decoded}`;
}

export const challenge02 = {
  name: "Challenge 02",
  solver,
};