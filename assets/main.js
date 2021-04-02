class Task{
    constructor(id, task, date, isCompleted){
        this.id = id;
        this.task = task;
        this.date = date;
        this.isCompleted = isCompleted;
    }
}

let TasksList = [{"id": "1","task": "Doctors Appointment","date": "March 5th at 2:30pm","isCompleted": true}, {"id": "2","task": "Tbib","date": "March 5th at 2:30pm","isCompleted": true}];

//Write All tasks we have in our Array
function RefreshTasks(){
    //Empty the tasks list before html new tasks elements
    document.getElementById('Tasks').innerHTML = "";
    TasksList.forEach((el) => {
        document.getElementById('Tasks').innerHTML += '<div class="task" id="task'+el.id+'"><div class="actions"><i class="fas fa-clipboard-check" onclick="CompleteTask('+el.id+')"></i><i class="far fa-trash-alt" onclick="RemoveTask('+el.id+')"></i></div><h2>'+el.task+'</h2><p>'+el.date+'</p></div>';
    });
}

RefreshTasks();

const inputTask = document.getElementById("taskAdd");

function ToggleNewTaskInput(){

     //Toggle Add Task input
     if(inputTask.style.display == "none") {
        inputTask.style.display = "block";
    }else{
        inputTask.style.display = "none";
    }

    AddTask();
}

function AddTask(){
    //If input is not empty push to Tasks List
    if(inputTask.value != ""){
        let task = new Task(TasksList.length + 1,inputTask.value, new Date(Date.now()).toUTCString(), false);
        TasksList.unshift(task);
        

        //Referesh Tasks list after adding the new Task
        RefreshTasks();
        //When push is done, make the input empty
        inputTask.value = "";
    }
}

//Completed Task function
function CompleteTask(taskId){
    let CompletedTask = document.getElementById("task"+taskId);
    CompletedTask.style.textDecoration  = "line-through";
    //CompletedTask.closest(".fa-trash-alt").style.display = "none";
}

//Remove Task function
function RemoveTask(taskId){
    let RemovedTask = document.getElementById("task"+taskId);
    TasksList.splice(RemovedTask, 1);
    RefreshTasks();
}