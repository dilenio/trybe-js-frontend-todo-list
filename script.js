// javascript
const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', function () {
  const addNewTask = document.querySelector('#lista-tarefas');
  const textToTask = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  li.innerHTML = textToTask.value;
  addNewTask.appendChild(li);
  textToTask.value = '';
});
