// Function to add a new task
function addTask() {
    const taskText = document.getElementById("insertdata").value;
    if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const taskCount = document.getElementById("task-count");

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="edit" onclick="editTask(this)">Edit</button>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Clear the input field and update the task count
    document.getElementById("insertdata").value = "";
    taskCount.textContent = taskList.children.length;
}

// Function to edit a task
function editTask(button) {
    const taskText = button.parentElement.querySelector("span");
    const newText = prompt("Edit task:", taskText.textContent);
    if (newText !== null) {
        taskText.textContent = newText;
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskList = document.getElementById("task-list");
    taskList.removeChild(button.parentElement);
    const taskCount = document.getElementById("task-count");
    taskCount.textContent = taskList.children.length;
}
