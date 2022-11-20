import { challenge01, challenge01b } from "./challenge-01/index.js";
import { challenge02, challenge02b } from "./challenge-02/index.js";
import { challenge03 } from "./challenge-03/index.js";

async function solve(challenge) {
  console.log(`${challenge.name} ==> ${await challenge.solver()}`);
}

const challenges = [challenge01, challenge01b, challenge02, challenge02b, challenge03];

for (const challenge of challenges) {
  await solve(challenge);
}
