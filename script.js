// javascript
function handleTaskElement(event) {
  const taskBackgroundColor = event.target;
  taskBackgroundColor.style.backgroundColor = 'rgb(128, 128, 128)';
}

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

const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', createTaskElement);

// const li = document.getElementById('li');
// if (document.getElementById('lista-tarefas').contains(li)) {
//   const olTaskSelect = document.querySelector('#lista-tarefas');
//   // const liTaskSelect = olTaskSelect.getElementsByTagName('li');
//   olTaskSelect.addEventListener('click', function (event) {
//     const changeColorTask = event.target;
//     // rgb(128, 128, 128)
//     changeColorTask.style.backgroundColor = 'red';
//   });
// }
