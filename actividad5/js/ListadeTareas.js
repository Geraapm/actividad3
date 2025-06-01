// LISTA DE TAREAS //

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const listatareas = document.getElementById('lista-tareas');

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
    });
}

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.classList.add('tarea-item');
    const span = document.createElement('span');
    span.textContent = taskText;

    span.addEventListener('click', () => {
        span.classList.toggle('completada');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'x';
    deleteBtn.title = 'Eliminar tarea';

    deleteBtn.addEventListener('click', () => {
        listatareas.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    listatareas.appendChild(li);

    taskInput.value = '';
    taskInput.focus();
}
