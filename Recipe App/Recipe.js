var Recipes = [];
var ch = 1;
// do{
//     console.log("1.. Add Recipe");
//     console.log("2.. View Recipe");
//     console.log("3.. update Recipe");
//     console.log("4.. Delete Recipe");
//     console.log("5.. Exit");
//     let ch : number | null = parseInt(prompt("Enter your choice: ") as string);
//     let Recipe : recipe;
//     switch(ch){
//         case 1:
//             let id = parseInt(prompt("Enter Recipe ID: ") as string);
//             let name = prompt("Enter Recipe Name: ") as string;
//             let type = prompt("Enter Recipe Type: ") as string;
//             let description = prompt("Enter Recipe Description: ") as string;
//             Recipe = addRecipe(id, name, type, description);
//             Recipes.push(Recipe);
//             alert("Recipe Added Successfully");
//             break;
//         case 2:
//             let recipes = viewRecipe();
//             for(let recp of recipes){
//                 console.log("ID: " + recp.id);
//                 console.log("Name: " + recp.name);
//                 console.log("Type: " + recp.type);
//                 console.log("Description: " + recp.description);
//             };
//             break;
//         case 3:
//             let id1 = parseInt(prompt("Enter Recipe ID: ") as string);
//             let name1 = prompt("Enter Recipe Name: ") as string;
//             let type1 = prompt("Enter Recipe Type: ") as string;
//             let description1 = prompt("Enter Recipe Description: ") as string;
//             updateRecipe(id1, name1, type1, description1);
//             break;
//         case 4:
//             let id2 = parseInt(prompt("Enter Recipe ID: ") as string);
//             DeleteRecipe(id2);
//             break;
//         case 5:
//             ch = 0;
//             break;
//         default:
//             console.log("Invalid Choice");
//             break;
//     }
// } while(ch != 0);
function Add() {
    var id = parseInt(document.getElementById("recipeId").value);
    var name = document.getElementById("recipeName").value;
    var type = document.getElementById("recipeType").value;
    var description = document.getElementById("description").value;
    var Recipe = addRecipe(id, name, type, description);
    Recipes.push(Recipe);
    appendRecipe();
    resetForm();
    alert("Recipe Added Successfully");
}
function onItemSelect(id) {
    var recipe = viewRecipeById(id);
    document.getElementById("recipeId").value = recipe.id.toString();
    document.getElementById("recipeName").value = recipe.name.toString();
    document.getElementById("recipeType").value = recipe.type.toString();
    document.getElementById("description").value = recipe.description.toString();
    var btn = document.getElementById("add");
    btn.value = "Update";
    btn.setAttribute("onclick", "updateRecipe()");
}
function addRecipe(id, name, type, description) {
    var Recipe = { id: id, name: name, type: type, description: description };
    return Recipe;
}
;
function viewRecipeById(id) {
    return Recipes.filter(function (recipe) { return recipe.id == id; })[0];
}
function onItemDelete(id) {
    Recipes = Recipes.filter(function (recipe) { return recipe.id != id; });
    alert("Recipe Deleted Successfully");
    appendRecipe();
    resetForm();
}
function updateRecipe() {
    var id = parseInt(document.getElementById("recipeId").value);
    var name = document.getElementById("recipeName").value;
    var type = document.getElementById("recipeType").value;
    var description = document.getElementById("description").value;
    Recipes = Recipes.map(function (recipe) {
        if (recipe.id == id) {
            recipe.name = name;
            recipe.type = type;
            recipe.description = description;
        }
        return recipe;
    });
    appendRecipe();
    resetForm();
    var btn = document.getElementById("add");
    btn.value = "Add Recipe";
    btn.setAttribute("onclick", "Add()");
}
function appendRecipe() {
    var table = document.getElementById("recipeTable");
    table.innerHTML = "";
    for (var _i = 0, Recipes_1 = Recipes; _i < Recipes_1.length; _i++) {
        var recp = Recipes_1[_i];
        var recpString = "<tr><td>" + recp.id + "</td><td>" + recp.name
            + "</td><td>" + recp.type
            + "</td><td>" + recp.description
            + "</td><td><button onclick='onItemSelect(" + recp.id + ")'>Edit</button></td>" +
            "<td><button onclick='onItemDelete(" + recp.id + ")'>Delete</button></td>" + "</tr>";
        table.innerHTML += recpString;
    }
}
function resetForm() {
    document.getElementById("recipeId").value = "";
    document.getElementById("recipeName").value = "";
    document.getElementById("recipeType").value = "";
    document.getElementById("description").value = "";
    var btn = document.getElementById("add");
    btn.innerHTML = "Add";
    btn.setAttribute("onclick", "Add()");
}
