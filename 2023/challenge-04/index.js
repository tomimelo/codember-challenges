import { loadData } from "../../utils/dataLoader.js";

async function solver() {
  const rawFiles = await loadData("2023/challenge-04/files_quarantine.txt")
  const files = rawFiles.split('\r\n')
  let validCount = 0
  for (const file of files) {
    const processedFile = processFile(file)
    if (processedFile.valid) {
      validCount++
    }
    if (validCount === 33) {
      return `submit ${processedFile.checksum}`
    }
  }
  throw new Error('FATAL ERROR')
}

function processFile(file) {
  const [str, checksum] = file.split('-')
  return {
    checksum,
    valid: checksum.split('').every((c) => getCharacterOccurrences(c, str) === 1)
  }
}

function getCharacterOccurrences(char, str) {
  return (str.match(new RegExp(char, 'g')) ?? []).length
}

export const challenge04 = {
  name: "Challenge 04",
  solver,
};