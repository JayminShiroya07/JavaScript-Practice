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

// 3.  Create a function that will calculate and return the number of posts made by each user.
var totslPosts = new Map();

totalPostsofEachUser = posts.map(e => totslPosts
    .set(e.userId , (totslPosts.get(e.userId) || 0)+1 ))

console.log(totslPosts)

// 4. Create a function that returns a list of users along with their associated posts.

var userWithPosts = [];

for(let user of users){
    let tempUser = {username:'',posts:[]}
    tempUser.username = user.name;
    for(let post of posts){
        if(post.userId == user.id){
            tempUser.posts.push(post)
        }
    }
    userWithPosts.push(tempUser)
}

for(let us of userWithPosts){
    console.log(us)
}

// 5. Create a function that returns all completed tasks by the user. Like if I want to get all the completed tasks of the user with ID 1 then it will return all the completed tasks of the user with ID 1.

var userId = 1;
ListCompletedTasks(userId)

function ListCompletedTasks(userId){
    let completed_tasks = []
    for(let task of tasks){
        if(task.userId == userId && task.completed == true)
            completed_tasks.push(task);
    }
    console.log(completed_tasks)
}