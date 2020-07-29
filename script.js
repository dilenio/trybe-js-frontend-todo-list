// Lidar com o evento click na tarefa
// Remove a seleção de itens e adiciona apenas naquele que foi clicado.
function handleTaskElement(event) {
  const taskBackgroundColor = event.target;
  const removeBackgroundColorTask = document.querySelectorAll('#lista');
  for (let index = 0; index < removeBackgroundColorTask.length; index += 1) {
    removeBackgroundColorTask[index].style.backgroundColor = '';
  }
  taskBackgroundColor.style.backgroundColor = 'rgb(128, 128, 128)';
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
  li.addEventListener('click', handleTaskElement);
}

// Chama a função para criar os elementos da tarefa
const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', createTaskElement);
