const users = require('./users.json')
const posts = require('./posts.json')
const tasks = require('./tasks.json')

// console.log(user[0].company)

// task-1 Filter out users who are from the company with the name "Romaguera-Crona".
var filtered_user = users.filter(e => e.company.name=="Romaguera-Crona");

console.log(filtered_user)