import { Challenges2022 } from "./2022/index.js";

async function solve(challenge) {
  console.log(`${challenge.name} ==> ${await challenge.solver()}`);
}

const challenges = [...Object.values(Challenges2022)];

for (const challenge of challenges) {
  await solve(challenge);
}
