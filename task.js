const users = require('./users.json')
const posts = require('./posts.json')
const tasks = require('./tasks.json')

// console.log(user[0].company)

// task-1 Filter out users who are from the company with the name "Romaguera-Crona".
var filtered_user = users.filter(e => e.company.name=="Romaguera-Crona");

console.log(filtered_user)

// 2.2. For each user, create a function that will return new object that includes only the id, name, and a new property called emailLength, which represents the length of the user's email address.

var new_users = users.map(u => makeNewUser(u))

function makeNewUser(user){
    if(user === null)   
        return false;
    return {
        id : user.id,
        name : user.name,
        emailLength : user.email.length
    }
}

console.log(new_users)