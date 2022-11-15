import { challenge01, challenge01b } from "./challenge-01/index.js";
import { challenge02, challenge02b } from "./challenge-02/index.js";

async function solve(challenge) {
  console.log(`${challenge.name} ==> ${await challenge.solver()}`);
}

const challenges = [challenge01, challenge01b, challenge02, challenge02b];

for (const challenge of challenges) {
  await solve(challenge);
}
