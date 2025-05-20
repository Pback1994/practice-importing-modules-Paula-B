// Task 3 - Use the Modules

const path = require("node:path");
const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

// 3.1) load existing tasks from tasks.json file

let myList = fileHandler.loadTasks("./tasks.json");
console.log(myList);

// 3.2) add new tasks to list.

const parsedData = JSON.parse(myList);

taskManager.addTasks(parsedData, "vacuum");
taskManager.addTasks(parsedData, "mow");
taskManager.addTasks(parsedData, "organize");

myList = JSON.stringify(parsedData);

// 3.3) list all tasks

console.log(myList);

// 3.4) Save updated task list back to tasks.json file.

fileHandler.saveTasks("./tasks.json", myList);
