const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let tasks = [];

function showTasks() {
  if (tasks.length === 0) {
    console.log("No tasks found!");
  } else {
    console.log("\nYour Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
  showMenu();
}

function addTask() {
  rl.question("Enter a new task: ", (task) => {
    tasks.push(task);
    console.log(`Task added: ${task}`);
    showMenu();
  });
}

function deleteTask() {
  showTasks();
  rl.question("Enter task number to delete: ", (num) => {
    const index = parseInt(num) - 1;
    if (index >= 0 && index < tasks.length) {
      console.log(`Removed task: ${tasks.splice(index, 1)}`);
    } else {
      console.log("Invalid task number!");
    }
    showMenu();
  });
}

function showMenu() {
  console.log("\nTo-Do List App");
  console.log("1. View Tasks");
  console.log("2. Add Task");
  console.log("3. Delete Task");
  console.log("4. Exit");

  rl.question("Choose an option: ", (choice) => {
    if (choice === "1") showTasks();
    else if (choice === "2") addTask();
    else if (choice === "3") deleteTask();
    else if (choice === "4") {
      console.log("Goodbye!");
      rl.close();
    } else {
      console.log("Invalid choice, try again.");
      showMenu();
    }
  });
}

// Start the app
showMenu();
