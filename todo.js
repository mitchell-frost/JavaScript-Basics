var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){

    if(input === "list"){
       listTodo();
    } else if (input === "new"){
            addTodo();
    } else if (input === "delete"){
            deleteTodo();
    }
    input = prompt("What would you like to do?");
}

function listTodo(){
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log(todos);
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
}

function deleteTodo(){
    var index = prompt("Enter array index to be removed");
        todos.splice(index, 1);
}