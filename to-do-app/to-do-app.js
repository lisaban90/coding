let addNewTaskButton = document.getElementById("button")
let modalOverlay = document.getElementById("modal_overlay")
let closeIcon = document.getElementById("close-icon-container")
let newTask = document.getElementById("new-task-container")
let taskInput = document.getElementById("taskname")
let addTaskInputedButton = document.getElementById("addtask")
let editIcon = document.getElementById("edit-icon")
let deleteIcon = document.getElementById("delete-icon")
let taskInputAlert = document.getElementById("task-input-alert")
let form = document.getElementById("form")
let listsSection = document.getElementById("lists_section")
let toDoArray = []
let isEditing = false;
let editingIndex = null;
let completeIcon = document.getElementById("complete")
let incompleteIcon = document.getElementById("incomplete")

addNewTaskButton.addEventListener("click", function(){
    modalOverlay.style.display = "flex"
    
}) 

closeIcon.addEventListener("click", function(){
    modalOverlay.style.display = "none"
    
})

form.addEventListener("submit",function(event){
    event.preventDefault();
    if (typeSomething (true)){
        if(isEditing){
            updateTask();
        }else{
            addToDoToArrayandUI();
        }
        console.log(toDoArray)
        console.log(taskInputted)
        form.reset();
    }
})


function typeSomething(){
    let taskInputted = taskInput.value;
    if(taskInputted.length == 0){
        taskInputAlert.innerText = 'You cannot submit unless you type a text';
        taskInput.style.border = "1px solid red";
        return false;
    }else {
            taskInputAlert.innerText = ' ';
            taskInput.style.border = "1.5px solid green";
            return true;
    }

}

function fetchItems(){
    if(localStorage.getItem("allTasks")){
        toDoArray = JSON.parse(localStorage.getItem("allTasks"));
    }
    createDivs();
}

function addToDoToArrayandUI(){
    taskInputted = taskInput.value
    toDoArray.push(
        {text: taskInputted, completed: false}
    );
    localStorage.setItem("allTasks", JSON.stringify(toDoArray));
    fetchItems();
    
    modalOverlay.style.display = "none";

}
    

    function createDivs(){
        listsSection.innerHTML = '';
       
        toDoArray.forEach(function(task, index){
        const newTask = document.createElement("div");
        newTask.classList.add("new-task-container");
        newTask.innerHTML = `
            <div class="task-name-status">
                <div class="complete-status">
                    <i class="fa-regular fa-circle incomplete" data-index= "${index}" style="${task.completed ? 'display: none;' : 'display: inline;'}"></i>
                    <i class="fa-solid fa-circle-check complete" data-index= "${index}" style="${task.completed ? 'display: inline;' : 'display: none;'}"></i>
                </div>
                <div class="task-name">
                    <h4>${task.text}</h4>
                </div>
            </div>
            <div class="icons">
                <div class="edit-icon">
                    <i class="fa-solid fa-pen-to-square" id="edit-icon"></i>
                </div>
                <div class="delete-icon">
                    <i class="fa-solid fa-trash" id="delete-icon"></i>
                </div>
            </div>`;

            listsSection.appendChild(newTask);
            newTask.style.display = "flex"  
            
            newTask.querySelector('.delete-icon').addEventListener('click', function(){
                deleteResource(index);
            })

            newTask.querySelector('.edit-icon').addEventListener('click', function(){
                editTask(index);
            })

            newTask.querySelector('.incomplete').addEventListener('click', function(){
                toggleComplete(index)
            })

            newTask.querySelector('.complete').addEventListener('click', function(){
                toggleComplete(index)
            })

        })            
}

function toggleComplete(index){
    toDoArray[index].completed = !toDoArray[index].completed;
    localStorage.setItem("allTasks", JSON.stringify(toDoArray));
    fetchItems();
}


function deleteResource(index){
    toDoArray.splice(index,1);

    localStorage.setItem("allTasks", JSON.stringify(toDoArray));
    fetchItems()
    /*createDivs();*/

}

function editTask(index){
    modalOverlay.style.display = "flex";
    taskInput.value = toDoArray[index].text;
    isEditing = true;
    editingIndex = index;

}

window.onload = fetchItems()

function updateTask(){
    taskInputted = taskInput.value;
    toDoArray[editingIndex].text= taskInputted;
    localStorage.setItem("allTasks", JSON.stringify(toDoArray));
    fetchItems();
    modalOverlay.style.display = "none";
    form.reset();
    isEditing = false;
    editingIndex = null;
}

/*function validateInput(){
    let valid = true;
    if (taskInput.value.length == 0) {
        taskInputAlert.innerText = 'You cannot submit unless you type a text'
        taskInput.style.border = "1px solid red"
        valid = false;
    }

    if (valid) {
        // Add the new resource to the resources array
        addToDoToArrayandUI();
}

function addToDoToArrayandUI(){
    let taskInputted = taskInput.value
    toDoArray.push(taskInputted)
    localStorage.setItem("allTasks", JSON.stringify(toDoArray))
    form.reset()

}

}*/