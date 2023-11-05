function solver() {
  const RANGE_MIN_NUMBER = 11098
  const RANGE_MAX_NUMBER = 98123
  const possiblePasswords = []
  for (let i = RANGE_MIN_NUMBER; i <= RANGE_MAX_NUMBER; i++) {
    if (itsDigit5RepeatedTwice(i) && itsInIncreasingOrder(i)) {
      possiblePasswords.push(i)
    }
  }

  return `submit ${possiblePasswords.length}-${possiblePasswords[55]}`
}

function itsDigit5RepeatedTwice(num) {
  return /5{2}/.test(num);
}

function itsInIncreasingOrder(num) {
  const splittedNumbers = String(num).split("").map(n => +n)
  for (let i=1; i < splittedNumbers.length; i++) {
    if (splittedNumbers[i] < splittedNumbers[i-1]) return false
  }
  return true
}

export const challenge04 = {
  name: "Challenge 04",
  solver,
};