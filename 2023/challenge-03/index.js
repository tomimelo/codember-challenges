import { loadData } from "../../utils/dataLoader.js";

async function solver() {
  const rawEncryptionPolicies = await loadData("2023/challenge-03/encryption_policies.txt")
  const encryptionPolicies = rawEncryptionPolicies.split('\n')
  let invalidCount = 0
  for (const encryptionPolicy of encryptionPolicies) {
    const processedEncryptionPolicy = processEncryptionPolicy(encryptionPolicy)
    if (!processedEncryptionPolicy.valid) {
      invalidCount++
    }
    if (invalidCount === 42) {
      return `submit ${processedEncryptionPolicy.key}`
    }
  }
  throw new Error('FATAL ERROR')
}

function processEncryptionPolicy(encryptionPolicy) {
  const [requirements, letter, key] = encryptionPolicy.replace(':', '').split(' ')
  const [min, max] = requirements.split('-').map((n) => Number(n))
  const occurrences = (key.match(new RegExp(letter, 'g')) ?? []).length
  return {
    key,
    valid: occurrences >= min && occurrences <= max
  }
}



export const challenge03 = {
  name: "Challenge 03",
  solver,
};