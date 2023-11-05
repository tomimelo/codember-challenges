import { Challenges2022 } from "./2022/index.js";
import { Challenges2023 } from "./2023/index.js";

async function solve(challenge) {
  console.log(`${challenge.name} ==> ${await challenge.solver()}`);
}

const challenges = [...Object.values(Challenges2022), ...Object.values(Challenges2023)];

for (const challenge of challenges) {
  await solve(challenge);
}
