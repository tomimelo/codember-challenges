import { loadData } from "../../utils/dataLoader.js";

async function solver() {
  // Load message_01.txt
  const rawMessage = await loadData("2023/challenge-01/message_01.txt")

  // Transform message to lowercase and split it by spaces and get array of words
  const words = rawMessage.toLowerCase().split(" ")

  //Build Map to count words appearances
  const wordsCountMap = words.reduce((map, word) => {
    //Set the word in the map adding 1 if count already exists, if not just set it to 1
    return map.set(word, (map.get(word) ?? 0) + 1)
  }, new Map())

  //Process the Map and concatenate each word with its count
  const wordsTextCount = Array.from(wordsCountMap.entries()).reduce((text, [word, count]) => {
    return text + word + count
  }, '')

  return `submit ${wordsTextCount}`;
}

export const challenge01 = {
  name: "Challenge 01",
  solver,
};