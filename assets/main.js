class Task{
    constructor(task, dateIn, isCompleted){
        this.task = task;
        this.dateIn = dateIn;
        this.isCompleted = isCompleted;
    }
}

let TasksList = [];
function AddTask() {
    const task = document.getElementById('taskAdd').value;
    var dateIn = new Date();
    
    var myTask = new Task(task,dateIn,false);
    TasksList.push(myTask);

    const TsList = document.getElementById('TasksList');
    var div = [];
    for(let i = 0; i < TasksList.length; i++){
        if(TasksList[i].task != ""){
            mydiv = '<div class="taskInput"><input type="checkbox" data="'+i+'" class="checkBoxInput"><input type="text" class="task" value="'+TasksList[i].task+'"><button class="removeBtn submit" type="button" data="'+i+'" value="'+i+'" id="addTaskBtn" onclick=RemoveTask()>Remove</button></div>';
            div.push(mydiv);
        }
    }
    TsList.innerHTML = div;
}

function RemoveTask() {
    const removeBtn = document.getElementById('addTaskBtn').value;
    console.log(removeBtn);
}