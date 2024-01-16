const taskField = document.querySelector("input");

// Function to save tasks to local storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li").forEach(li => tasks.push({
        text: li.textContent,
        completed: li.className === "completed"
    }));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        const newListItem = document.createElement("li");
        newListItem.textContent = task.text;
        if (task.completed) {
            newListItem.className = "completed";
        }
        document.querySelector("ul").appendChild(newListItem);
    });
}

document.querySelector("button").addEventListener("click", () => {
    const newListItem = document.createElement("li");
    const task = document.createTextNode(taskField.value);
    if (taskField.value !== "") {
        newListItem.appendChild(task);
        document.querySelector("ul").prepend(newListItem);
        taskField.value = "";
        saveTasks();  // Save tasks after adding a new one
    }
});

document.querySelector("ul").addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        if (event.target.className === "completed") {
            event.target.className = "";
        } else {
            event.target.className = "completed";
        }
        saveTasks();  // Save tasks after marking as completed
    }
});

document.getElementById("delete").addEventListener("click", () => {
    document.querySelectorAll("li.completed").forEach(element => {
        element.remove();
    });
    saveTasks();  // Save tasks after deletion
});

// Load tasks from local storage when the page loads
loadTasks();
