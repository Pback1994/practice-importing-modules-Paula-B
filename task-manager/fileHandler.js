// Task #2 - Create fileHandler.js Module

const fs = require("fs");

function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, tasks);
}

function loadTasks(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const task = JSON.parse(content);
  return content;
}

module.exports = { saveTasks, loadTasks };
