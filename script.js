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
  li.innerHTML = textToTask.value;
  li.id = 'lista';
  addNewTask.appendChild(li);
  textToTask.value = '';
  li.addEventListener('click', handleClickTaskElement);
  li.addEventListener('dblclick', handleDblclickTaskElement);
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
