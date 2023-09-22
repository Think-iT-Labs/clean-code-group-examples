const users = [
  { name: "John", age: 30, country: "Spain" },
  { name: "Joshua", age: 22, country: "Tunisia" },
  { name: "MIchael", age: 35, country: "Egypt" },
];

function getUsersByName(name) {
  return users.filter((user) => (user.name = name));
}

function fetchUsersByAge(age) {
  return users.filter((user) => (user.name = age));
}

function retrieveUsersByAge(country) {
  return users.filter((user) => (user.country = country));
}
