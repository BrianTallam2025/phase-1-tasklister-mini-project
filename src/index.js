document.addEventListener('DOMContentLoaded', () => {np
  createTaskForm();
});
  document.getElementById('create-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('new-task-description');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('tasks');
    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    listItem.classList.add('task-item');
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear input field
});
