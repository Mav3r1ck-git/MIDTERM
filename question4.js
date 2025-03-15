let tasks = [];

let taskId = 1;

class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

const addTask = (name, description) => {
    const newTask = {
        id: taskId++,  
        name: name,
        description: description
    };
    tasks.push(newTask); 
    console.log('Task added')
}

const viewTasks = () => {
    if (tasks.length === 0) {
        console.log('No tasks available.');
        return;
    }
    console.log('Tasks List:');
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
    });
}

const updateTask = (id, newName, newDescription) => {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log('Task not found.');
        return;
    }
    task.name = newName;
    task.description = newDescription;
    console.log(`Task ID: ${task.id}, succesfully updated`)
}

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Task not found.');
        return;
    }
    tasks.splice(index, 1);
    console.log(`Task ID: ${id}, successfully deleted`)
}

console.log(viewTasks())

console.log(addTask('Task1','This is a task hehe'))
console.log(viewTasks())

console.log(updateTask(1,'Task2','This is an updated task hehe'))
console.log(viewTasks())

console.log(deleteTask(1))
console.log(viewTasks())