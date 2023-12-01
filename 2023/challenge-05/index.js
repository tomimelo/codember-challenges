import { loadData } from "../../utils/dataLoader.js";

async function solver() {
  const database = await loadData("2023/challenge-05/database_attacked.txt")
  const rawUsers = database.split('\n')
  const users = rawUsers.map((rawUser) => toUser(rawUser))
  const invalidUsers = users.filter((user) => !isValid(user))
  const hiddenMessage = invalidUsers.map((user) => user.username[0]).join('')
  return `submit ${hiddenMessage}`
}

function toUser(rawUser) {
  const [id, username, email, age, location] = rawUser.split(',')
  return {
    id,
    username,
    email,
    age,
    location
  }
}

function isValid(user) {
  return existsAndIsAlphanumeric(user.id) && existsAndIsAlphanumeric(user.username) && emailIsValid(user.username, user.email) && ageIsValid(user.age) && locationIsValid(user.location)
}

function existsAndIsAlphanumeric(str) {
  return !!str && /^[a-z0-9]+$/i.test(str)
}

function emailIsValid(username, email) {
  return new RegExp(`^${username}@([a-zA-Z]+)\.com$`, 'i').test(email)
}

function ageIsValid(age) {
  return !!age ? !isNaN(age) : true
}

function locationIsValid(location) {
  return !!location && typeof location === 'string'
}

export const challenge05 = {
  name: "Challenge 05",
  solver,
};