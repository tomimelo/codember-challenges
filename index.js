import { Challenges2022 } from "./2022/index.js";
import { Challenges2023 } from "./2023/index.js";
import { Challenges2024 } from "./2024/index.js";

async function solve(challenge) {
  console.log(`${challenge.name} ==> ${await challenge.solver()}`);
}

const years = [
  {
    year: '2022',
    challenges: Object.values(Challenges2022)
  },
  {
    year: '2023',
    challenges: Object.values(Challenges2023)
  },
  {
    year: '2024',
    challenges: Object.values(Challenges2024)
  }
]

for (const { year, challenges } of years) {
  console.log(`========================================\n------------------${year}------------------\n========================================`)
  for (const challenge of challenges) {
    await solve(challenge);
  }
}
