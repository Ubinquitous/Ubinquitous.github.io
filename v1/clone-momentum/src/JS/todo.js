const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function removeToDo(event){
    const li = (event.target.parentElement);
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    inputTodo.classList.remove("hidden"); 
    focusTodo.innerText = `What is your main focus for today?`;
}

function FilterToDo(item, event){
    return item !== event.target.parentElement;
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const inputTodo = document.querySelector("#inputTodo");

    li.id = newTodo.id;
    focusTodo.innerText = `TODAY`;
    inputTodo.classList.add("hidden");

    const button = document.createElement("button");
    button.innerText = "✓";
    button.addEventListener("click", removeToDo);
    
    span.innerText = `${newTodo.text}`;

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}   

function handleToDoSubmit(event){
    event.preventDefault();
    console.log(toDoInput.value);

    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}