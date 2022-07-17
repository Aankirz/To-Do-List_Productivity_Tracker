// First step to start writing code of js is to access the element where we want to add behaviour.

let tasks=[];//task array
const taskList=document.getElementById('list');//getting the ul
const addTaskInput=document.getElementById('add');//id of input
const tasksCounter=document.getElementById('tasks-counter');//to update no. of tasks

console.log('working');
/* And also we need to mark checked or not, if we say task is done then we 
will add the checked attribute if not we will not do anything.*/

// function fetchTodos(){
//     //NEED  to change done-> completed , text -> title
//     //Get request
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function(response){
//         console.log(response);
//         return response.json;
//     })
// }
 
function addTaskToDOM(task){
    const li=document.createElement('li');
    li.innerHTML= 
    `
    <input type="checkbox" id="${task.id}" ${task.completed ? `checked`:``} class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    <img src="bin1.png" class="delete" data-id="${task.id}" />

   ` ;// we don't need to use li tags again.
   taskList.append(li);
}

function renderList(){
    taskList.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML= tasks.length;

}

function toggleTask(taskId){
 const markTask=tasks.filter(function(task){
    return task.id=taskId
 })
 if(markTask.length>0){//means it has an object
    const currentTask=markTask[0];// only one object
    currentTask.completed=!currentTask.completed;
    renderList();
    showNotification('Task Toggled Successfully');
    return;
 }
 showNotification('could not be toggled successfully');
}//Check a particular task

function deleteTask(taskId){
    //So you first need taskId will access like object accessing it's key to get value.
    const newTasks=tasks.filter(function(task){
        return task.id!==taskId
    })
    tasks=newTasks;// so not possible if we keep task to be const -> let
    //creating a new array by removing that particular element.
    renderList();
    showNotification('Task deleted successfully')
}

function addTask(task){ 
    //Adding task means pushing it into the task array
    //If task is present
    if(task){
        tasks.push(task);
        renderList();
        showNotification('Task added successfuly');
        return;
    }

   showNotification('Task can not be added');

 }

function showNotification(message){
    alert(message);
}//Pop up

function handleInputKeypress(e){
    if(e.key=="Enter"){
        const text=e.target.value;
    //console to check
    console.log('text',text);
    if(!Text){
        showNotification('Task without text cannot be Added')
        return;
    }
    //whenever entered create a new empty task input, Where Task is an object
    const task={
      text,//or text,
      id:Date.now().toString(),//To access the id through a Time stamp
      done:false// should be marked as false.   because only added not completed
    }

    //then making the input box as empty
    e.target.value='';
    addTask(task);

    }
}

//So we have added event delegation
function handleClickListener(e){
    const target=e.target;
    console.log(target);

    if(target.className=='delete'){
     const taskId=target.dataset.id;
     deleteTask(taskId);
     return;
    }else if(target.className=='custom-checkbox'){
        const taskId=target.dataset.id;
        toggleTask(taskId)
        return;
    }

}

function initializeApp(){
    // fetchTodos();
    addTaskInput.addEventListener('keyup',handleInputKeypress);//Because as the user is typing you need to get the latest value
    document.addEventListener('click',handleClickListener);

}


initializeApp();

