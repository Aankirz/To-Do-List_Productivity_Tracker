// First step to start writing code of js is to access the element where we want to add behaviour.

const tasks=[];
const taskList=document.getElementById('list');
const addTaskInput=document.getElementById('add');
const tasksCounter=document.getElementById('tasks-counter');

console.log(working);

function renderList(){}

function markTaskCompleted(taskId){}

function deleteTask(taskId){}

function addTask(task){}

function showNotification(message){}

class Person{
    constructor(name){
        this.name=name;
        
    }
}
var person=new Person('John');

person.hasOwnProperty(property);

class student extends Person{
    constructor(name,className,rollNo){
        super(name);
        this.className=className;
        this.rollNo=rollNo;

    }
     getDetails() {
        var arr=[this.name,this.rollNo,this.className];
      return arr;
    }
}
var s1=new student('John','1st','1');

class teacher extends Person{
    constructor(name,teacherId,subject){
        super(name);
        this.teacherId=teacherId;
        this.subject=subject;
    }
    getDetails(){
        var arr=[this.name,this.teacherId,this.subject];
        return arr;
    }
}


