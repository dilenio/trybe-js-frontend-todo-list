// Salva no LocalStorage as tarefas
function saveToLocalStorage() {
  localStorage.clear();
  const tasks = document.querySelector('#lista-tarefas');
  const objTasks = [];
  const objClasses = [];
  for (let index = 0; index < tasks.children.length; index += 1) {
    objTasks[index] = tasks.children[index].innerText;
    objClasses[index] = tasks.children[index].classList;
  }
  localStorage.setItem('tasks', objTasks.join());
  localStorage.setItem('classes', objClasses.join());
}

// Recupera as tarefas do LocalStorage
function getFromLocalStorage() {
  const objTasks = localStorage.getItem('tasks').split(',');
  const objClasses = localStorage.getItem('classes').split(',');
  for (let index = 0; index < objTasks.length; index += 1) {
    const addTask = document.querySelector('#lista-tarefas');
    const list = document.createElement('li');
    list.innerHTML = objTasks[index];
    list.className = objClasses[index];
    list.id = 'lista';
    addTask.appendChild(list);
    list.addEventListener('click', handleClickTaskElement);
    list.addEventListener('dblclick', handleDblclickTaskElement);
  }
}

// Lidar com o evento click na tarefa
// Remove a seleção de itens e adiciona apenas naquele que foi clicado.
function handleClickTaskElement(event) {
  const taskBackgroundColor = event.target;
  const removeBackgroundColorTask = document.querySelectorAll('#lista');
  for (let index = 0; index < removeBackgroundColorTask.length; index += 1) {
    removeBackgroundColorTask[index].classList.remove('selected');
  }
  taskBackgroundColor.classList.add('selected');
}

// Lidar com o evento double click na tarefa
function handleDblclickTaskElement(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed')) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

// Cria os elementos da tarefa
function createTaskElement() {
  const addNewTask = document.querySelector('#lista-tarefas');
  const textToTask = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  if (textToTask.value !== '') {
    li.innerHTML = textToTask.value;
    li.id = 'lista';
    addNewTask.appendChild(li);
    textToTask.value = '';
    li.addEventListener('click', handleClickTaskElement);
    li.addEventListener('dblclick', handleDblclickTaskElement);
  }
}

// Apaga todas as tarefas
function removeAllTasks() {
  const allTasks = document.querySelector('#lista-tarefas');
  while (allTasks.firstChild) {
    allTasks.removeChild(allTasks.lastChild);
  }
}

// Apaga tarefas concluídas
function removeCompletedTasks() {
  const allCompletedTasks = document.getElementsByClassName('completed');
  while (allCompletedTasks.length > 0) {
    allCompletedTasks[0].remove();
  }
}

// Chama a função para criar os elementos da tarefa
const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', createTaskElement);

// Chama a função para apagar todas as tarefas
const buttonRemoveAllTasks = document.querySelector('#apaga-tudo');
buttonRemoveAllTasks.addEventListener('click', removeAllTasks);

// Chama a função para apagar tarefas finalizadas
const buttonRemoveCompletedTasks = document.querySelector('#remover-finalizados');
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);

// Chama a função para salvar as tarefas no LocalStorage
const buttonSaveTasks = document.querySelector('#salvar-tarefas');
buttonSaveTasks.addEventListener('click', saveToLocalStorage);

window.onload = function () {
  getFromLocalStorage();
};
