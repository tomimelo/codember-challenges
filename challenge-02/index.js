import { loadData } from "../utils/dataLoader.js";

async function solver() {
  const encryptedMessage = await loadData("challenge-02/encrypted.txt");

  //ASCII code of lowercase letters goes from 97 to 122. So if the code starts with 1 you need to take 3 characters, and if it starts with 9, you need to take only 2

  //Splitting encrypted message in separate words
  const words = encryptedMessage.split(" ")

  //Decrypting each word and joining them again by a whitespace
  const decryptedMessage = words.map(decryptWord).join(" ")

  return `submit ${decryptedMessage}`
}

function decryptWord(word) {
  //Matching by 3 characters long starting by 1 or 2 characters long starting with 9
  const wordCharacters = word.match(/1\d{2}|9\d{1}/g)

  //Converting char array to it string equivalent. e.g: [ '116', '104', '97', '110', '107', '115' ] ==> 'thanks'
  return String.fromCharCode(...wordCharacters)
}

export const challenge02 = {
  name: "Challenge 02",
  solver,
};