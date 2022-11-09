import { promises as fs } from "fs";

export async function loadData(path) {
  return await fs.readFile(path, "utf-8");
}
