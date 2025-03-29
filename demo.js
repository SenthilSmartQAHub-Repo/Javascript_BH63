
// user is not assigned any value defualt should be admin
// if user assigned any value it should be assigned value

let user=""

const role = user.length ? user : "admin";

console.log(role)