import { loadData } from "../../utils/dataLoader.js";

// This is a regex based solution
async function solver() {
  // Load users.txt
  const rawData = await loadData("2022/challenge-01/users.txt");

  // Parse file and get array of users splitting by double new lines (to get individual users)
  // and then split and join them again to get all the user info in a single line
  const users = rawData.split(/\n\n/).map((u) => u.split(/\n/).join(" "));

  // This regex search for strings that has all of the required fields regardless of the order
  const requiredFieldsRegex =
    /^(?=.*\busr\b)(?=.*\beme\b)(?=.*\bpsw\b)(?=.*\bage\b)(?=.*\bloc\b)(?=.*\bfll\b).+/;

  // Filtering users that meet the condition by regex
  const validUsers = users.filter((user) => requiredFieldsRegex.test(user));

  // Matching the string that has the username and extracting it by capturing group
  const [, lastValidUserUsername] = validUsers.at(-1).match(/usr:(@\w+)/);

  const amountOfValidUsers = validUsers.length;
  return `submit ${amountOfValidUsers}${lastValidUserUsername}`;
}

// This is a more straight forward solution
async function alternativeSolver() {
  // Load users.txt
  const rawData = await loadData("2022/challenge-01/users.txt");

  // Parse file and get array of users splitting by double new lines (to get individual users)
  // and then split and join them again to get all the user info in a single line
  const users = rawData.split(/\n\n/).map((u) => u.split(/\n/).join(" "));

  const requiredFields = ["usr", "eme", "psw", "age", "loc", "fll"];

  // Splitting user fields in individual strings and splitting that strings again to get key:value pairs
  // After that I create an object from that array of arrays
  const parsedUsers = users.map((user) =>
    Object.fromEntries(user.split(" ").map((field) => field.split(":")))
  );

  // Filtering users that contains all the required fields
  const validUsers = parsedUsers.filter((user) =>
    requiredFields.every((key) => Object.keys(user).includes(key))
  );

  const lastValidUser = validUsers.at(-1);
  const amountOfValidUsers = validUsers.length;

  return `submit ${amountOfValidUsers}${lastValidUser.usr}`;
}

export const challenge01 = {
  name: "Challenge 01",
  solver,
};

export const challenge01b = {
  name: "Challenge 01 (Alternative solution)",
  solver: alternativeSolver,
};
