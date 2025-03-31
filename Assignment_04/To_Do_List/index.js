function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button> <button onclick="completeTask(this)">✔</button>`;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function completeTask(button) {
    button.parentElement.style.textDecoration = "line-through";
}
