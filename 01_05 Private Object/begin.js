const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "Name",
  [password]: "pass",
  age: 2,
};

console.log(user); //{age: 2, Symbol(username): 'Name', Symbol(password): 'pass'}
console.log(user.username); //undefined
