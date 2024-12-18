let taskList = JSON.parse(localStorage.getItem('taskList'));
if(!taskList) {
  taskList = [];
}
console.log(taskList);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//1START: Load in the week, all the day boxes
let outputHTML = '';
const weekContainer = document.querySelector('.week-container');

days.forEach((day, index) => {
  outputHTML += `
  <div class="day-container">
  
    <div class="day-menu-bar">
      <div style="flex: 1; text-align: left; margin: 2px 10px;">${day}</div>
      <button class="button-day">-</button>
    </div>
  
    <div class="js-output-${index}"></div>
  
    <div class="js-add-box-${index}">
      <button class="js-add-button" data-day=${index}>Add</button>
    </div>
    
  </div>`;
});

weekContainer.innerHTML = outputHTML;
//1FINISH: Load in the week, all the day boxes

//2START: Add buttons change to input box
const addButtons = document.querySelectorAll('.js-add-button');

addButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    const {day} = button.dataset;
    const addBox = document.querySelector(`.js-add-box-${day}`);
    addBox.classList.add('css2-add-box');

    addBox.innerHTML = `
    <input class="css2-input js-input-${day}" placeholder="Type task to add">
    <button>+</button>
    `;

    const inputElement = document.querySelector(`.js-input-${day}`);
    inputElement.addEventListener('keydown', () => {
      if(event.key === 'Enter') {
        const taskId = Math.random();
        document.querySelector(`.js-output-${day}`).innerHTML += `
        <div class="js-task-box-${taskId}">
          ${inputElement.value} 
          <button>Check</button>
          <button>Edit</button>
          <button class="js-delete-button" data-task-id="${taskId}">Delete</button>
        </div>`;

        taskList.push({taskName: inputElement.value, isComplete: false, day: day, taskId: taskId});
        saveData();
        inputElement.value = '';
        console.log(JSON.stringify(taskList));
        deleteButtons = document.querySelectorAll('.js-delete-button');
        deleteButtons.forEach((button) => {
          button.addEventListener('click', () => {
            const {taskId} = button.dataset;
            deleteTask(taskId);
          });
        });

      }
    });
  });
});
//2FINISH: Add tasks

function saveData() {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function renderTasks() {
  taskList.forEach((task) => {
    document.querySelector(`.js-output-${task.day}`).innerHTML += `
    <div class="js-task-box-${task.taskId}">
      ${task.taskName} 
      <button>Check</button>
      <button>Edit</button>
      <button class="js-delete-button" data-task-id="${task.taskId}">Delete</button>
    </div>
    `;
  });
}

renderTasks();

let deleteButtons = document.querySelectorAll('.js-delete-button');
deleteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const {taskId} = button.dataset;
    deleteTask(taskId);
  });
});

function deleteTask(deleteId) {
  taskList.forEach((task, index) => {
    console.log(`hi${index}`);
    console.log(`task.taskId: ${task.taskId} and deleteId: ${deleteId}`);
    console.log(task.taskId === Number(deleteId));
    if(task.taskId === Number(deleteId)) {
      taskList.splice(index, 1);
      console.log(JSON.stringify(taskList));
      saveData();
    }
  });

  let selector = `${deleteId}`;
  modifiedSelector = selector.replace('.', '\\.');

  document.querySelector(`.js-task-box-${modifiedSelector}`).remove();
}