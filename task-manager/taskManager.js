// Task #1 - Create taskManager.js Module

function addTasks(tasks, task) {
  return tasks.push(task);
}

function listTasks(tasks) {
  console.log(tasks);
}

module.exports = { addTasks, listTasks };
