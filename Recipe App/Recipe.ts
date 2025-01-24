type recipe = {
    id:number,
    name: String, 
    type: String, 
    description: String
}

let Recipes : Array<recipe> = [];

let ch = 1;
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


function Add(){
    let id = parseInt((<HTMLInputElement>document.getElementById("recipeId")).value);
    let name = (<HTMLInputElement>document.getElementById("recipeName")).value;
    let type = (<HTMLInputElement>document.getElementById("recipeType")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let Recipe = addRecipe(id, name, type, description);
    Recipes.push(Recipe);
    appendRecipe();
    resetForm();
    alert("Recipe Added Successfully");
}

function onItemSelect(id:number){
    const recipe = viewRecipeById(id);
    (<HTMLInputElement>document.getElementById("recipeId")).value = recipe.id.toString();
    (<HTMLInputElement>document.getElementById("recipeName")).value = recipe.name.toString();
    (<HTMLInputElement>document.getElementById("recipeType")).value = recipe.type.toString();
    (<HTMLInputElement>document.getElementById("description")).value = recipe.description.toString();
    let btn = document.getElementById("add") as HTMLButtonElement;
    btn.value = "Update";
    btn.setAttribute("onclick", "updateRecipe()");
    
}


function addRecipe(id:number, name: String, type: String, description:String) : recipe {
    let Recipe : recipe = {id:id, name:name, type:type, description:description};
    return Recipe;
};

function viewRecipeById(id:number) : recipe {
    return Recipes.filter((recipe) => recipe.id == id)[0];
}

function onItemDelete(id:number) : void {
    Recipes = Recipes.filter((recipe) => recipe.id != id);
    alert("Recipe Deleted Successfully");
    appendRecipe();
    resetForm();
}   

function updateRecipe() {
    let id = parseInt((<HTMLInputElement>document.getElementById("recipeId")).value);
    let name = (<HTMLInputElement>document.getElementById("recipeName")).value;
    let type = (<HTMLInputElement>document.getElementById("recipeType")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    Recipes = Recipes.map((recipe) => {
        if(recipe.id == id){
            recipe.name = name;
            recipe.type = type;
            recipe.description = description;
        }
        return recipe;
    });
    appendRecipe();
    resetForm();
    let btn = document.getElementById("add") as HTMLButtonElement;
    btn.value = "Add Recipe";
    btn.setAttribute("onclick", "Add()");
}

function appendRecipe(){
    let table = document.getElementById("recipeTable") as HTMLTableElement;
    table.innerHTML = "";
    for(let recp of Recipes){
       let recpString = "<tr><td>"+recp.id+"</td><td>"+recp.name
       +"</td><td>"+recp.type
       +"</td><td>"+recp.description
       +"</td><td><button onclick='onItemSelect("+recp.id+")'>Edit</button></td>"+
       "<td><button onclick='onItemDelete("+recp.id+")'>Delete</button></td>"+"</tr>";
         table.innerHTML += recpString;
    }
}

function resetForm(){
    (<HTMLInputElement>document.getElementById("recipeId")).value = "";
    (<HTMLInputElement>document.getElementById("recipeName")).value = "";
    (<HTMLInputElement>document.getElementById("recipeType")).value = "";
    (<HTMLInputElement>document.getElementById("description")).value = "";
    let btn = document.getElementById("add") as HTMLButtonElement;
    btn.innerHTML = "Add";
    btn.setAttribute("onclick", "Add()");
}