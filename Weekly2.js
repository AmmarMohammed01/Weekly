let taskList = JSON.parse(localStorage.getItem('taskList'));
if(!taskList) {
  taskList = [];
}
// console.log(taskList);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//1START: Load in the week, all the day boxes
let outputHTML = '';
const weekContainer = document.querySelector('.week-container');

days.forEach((day, index) => {
  outputHTML += `
  <div class="day-container">
  
    <div class="day-menu-bar">
      <div style="flex: 1; text-align: left; margin: 2px 10px;">${day}</div>
      <button title="Clear all tasks from ${days[index]}" class="button-day js-clear-day-button" data-day=${index}>&#128465;</button>
    </div>
  
    <div class="js-output-${index}"></div>
  
    <div class="js-add-box-${index} css2-add-box-original">
      <button class="js-add-button css2-add-button" data-day=${index}>&plus;</button>
    </div>
    
  </div>`;
});

weekContainer.innerHTML = outputHTML;
//1FINISH: Load in the week, all the day boxes

//CLEAR ENTIRE DAY
document.querySelectorAll('.js-clear-day-button').forEach((button) => {
  button.addEventListener('click', () => {
    const {day} = button.dataset;
    taskList = taskList.filter((task) => {
      if (!(task.day === day)) return task;
    });
    saveAndRender();
  });
});

//CLEAR WEEK
document.querySelector('.js-clear-all-button').addEventListener('click', () => { taskList = []; saveAndRender();});

//Add buttons change to input box
let addButtons = document.querySelectorAll('.js-add-button');
addTask(addButtons);

function saveData() {
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function renderTasks() {
  for(let i = 0; i < 7; i++) {
    document.querySelector(`.js-output-${i}`).innerHTML = '';
  }

  taskList.forEach((task) => {
    checkBtnHTML = task.isComplete ? `<button class="js-check-button css2-checkbtn-complete css2-checkbtn" data-task-id=${task.taskId}>Done &#10003;</button>` : `<button class="js-check-button css2-checkbtn" data-task-id=${task.taskId}>Not Done</button>`

    document.querySelector(`.js-output-${task.day}`).innerHTML += `
    <div class="js-task-box-${task.taskId} css2-task-box">
      <div class="css2-task-field">${task.taskName}</div>
      <div class="css2-task-buttons-box">
        ${checkBtnHTML}
        <button class="js-edit-button css2-edit-button" data-task-id=${task.taskId}>Edit</button>
        <button class="js-delete-button css2-delete-button" data-task-id="${task.taskId}">Delete</button>
      </div>
    </div>
    `;
  });

  const checkButtons = document.querySelectorAll('.js-check-button');
  checkButtons.forEach( (button) => {
    button.addEventListener('click', () => {
      const {taskId} = button.dataset;
      completeTask(taskId);
    });
  });

  //EDIT FEATURE
  const editButtons = document.querySelectorAll('.js-edit-button');
  editButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const {taskId} = button.dataset;
      let selector = `${taskId}`;
      modifiedSelector = selector.replace('.', '\\.');
      const taskBox = document.querySelector(`.js-task-box-${modifiedSelector}`);

      let foundTaskIndex = -1;
      taskList.forEach((task, index) => {
        if(task.taskId === Number(taskId)) foundTaskIndex = index;
      });
      taskBox.innerHTML = `
      <input class="js-edit-input css2-edit-input" value="${taskList[foundTaskIndex].taskName}" data-index="${foundTaskIndex}">
      <div class = "css2-edit-buttons-box">
        <button class="js-save-edit-button css2-save-edit-button" data>Save Edit</button>
        <button class="js-cancel-edit-button css2-cancel-edit-button">Cancel Edit</button>
      </div>
      `;

      //editor input field: can only save one open edit
      document.querySelectorAll('.js-edit-input').forEach((input)=>{
        input.addEventListener('keydown', () => {
          if(event.key === 'Enter') {
            taskList[input.dataset.index].taskName = input.value;
            saveAndRender();
          }
        });

        //save edit button: can save multiple open edits
        document.querySelectorAll('.js-save-edit-button').forEach((button)=> {button.addEventListener('click', ()=> {
          taskList[input.dataset.index].taskName = input.value;
          saveAndRender();
        });});
      });
      document.querySelectorAll('.js-cancel-edit-button').forEach((button) => {button.addEventListener('click', () => {renderTasks();})}); //cancel edit button reloads page
    })
  });

  const deleteButtons = document.querySelectorAll('.js-delete-button');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const {taskId} = button.dataset;
      deleteTask(taskId);
    });
  });
}

renderTasks();

function addTask(buttons) {
  buttons.forEach( (button) => {
    button.addEventListener('click', () => {
      const {day} = button.dataset;
      const addBox = document.querySelector(`.js-add-box-${day}`);
      addBox.classList.add('css2-add-box');
      addBox.classList.remove('css2-add-box-original');
  
      addBox.innerHTML = `
      <input class="css2-input js-input-${day}" placeholder="Type task to add">
      <button class="css2-back-task-button js-back-task-button">Back</button>
      <button title="Click to add task to ${days[day]}" class="css2-add-task-button js-add-task-button-${day}">&plus;</button>
      `;
  
      const inputElement = document.querySelector(`.js-input-${day}`);
      inputElement.addEventListener('keydown', () => {
        if(event.key === 'Enter') {
          const taskId = Math.random();
          taskList.push({taskName: inputElement.value, isComplete: false, day: day, taskId: taskId});
          inputElement.value = '';
          saveAndRender();
        }
      });
  
      const addTaskButton = document.querySelector(`.js-add-task-button-${day}`);
      addTaskButton.addEventListener('click', () => {
        const taskId = Math.random();
        taskList.push({taskName: inputElement.value, isComplete: false, day: day, taskId: taskId});
        inputElement.value = '';
        saveAndRender();
      });
  
      const backTaskButton = document.querySelectorAll(`.js-back-task-button`);
      backTaskButton.forEach((button) => {
        button.addEventListener('click', () => {
          addBox.innerHTML = `
          <button class="js-add-button css2-add-button" data-day=${day}>&plus;</button>`;
          addBox.classList.remove('css2-add-box');
          addBox.classList.add('css2-add-box-original');
          buttons1 = document.querySelectorAll('.js-add-button');
          addTask(buttons1);
        });
      });
  
    });
  });
}

function deleteTask(deleteId) {
  taskList.forEach((task, index) => {
    if(task.taskId === Number(deleteId)) { //I was having a few errors here because deleteId was a string
      taskList.splice(index, 1);
      saveData();
    }
  });

  let selector = `${deleteId}`;
  modifiedSelector = selector.replace('.', '\\.');

  document.querySelector(`.js-task-box-${modifiedSelector}`).remove();
}

function completeTask(completeId) {
  taskList.forEach((task, index) => {
    if(task.taskId === Number(completeId)) { 
      taskList[index].isComplete = !taskList[index].isComplete ? true : false;
      saveAndRender(); //I feel like there is a better way to update color w/o rendering page everytime
    }
  });
}

function saveAndRender() {
  saveData();
  renderTasks();
}

let title = JSON.parse(localStorage.getItem('weekly2-title'));
if(!title) title = 'Title goes here...';

const titleElement = document.querySelector('.js-change-info');
titleElement.innerHTML = title;
const titleEditButtonBox = document.querySelector('.js-title-edit-button-box');
const changeTitleButton = document.querySelector('.js-button-change-info');
editTitle(changeTitleButton);

function editTitle(button1) {
  button1.addEventListener('click', () => {
    titleElement.innerHTML = `<input class="js-change-info-input css1-input" placeholder="Please enter a title">`;
    titleEditButtonBox.innerHTML = `
    <button class="js-save-title-edit-button button-change-info">Save Edit</button>
    <button class="js-cancel-title-edit-button button-change-info">Cancel Edit</button>
    `;
  
    let tempTitle = '';

    titleElement.addEventListener('keydown', () => {
      if(event.key === 'Enter') {
        // console.log(document.querySelector('.js-change-info-input')); //some null error is occruing for line below
        tempTitle = document.querySelector('.js-change-info-input').value;
        titleElement.innerHTML = !(tempTitle === '') ? tempTitle : "Empty Title";
        localStorage.setItem('weekly2-title', JSON.stringify(tempTitle));

        titleEditButtonBox.innerHTML = `<button class="button-change-info js-button-change-info">Edit</button>`;
        editTitle(document.querySelector('.js-button-change-info'));
      }
    });
  
    const saveTitleEditButton = document.querySelector('.js-save-title-edit-button');
    saveTitleEditButton.addEventListener('click', () => {
      tempTitle = document.querySelector('.js-change-info-input').value;
      titleElement.innerHTML = !(tempTitle === '') ? tempTitle : "Empty Title";
      localStorage.setItem('weekly2-title', JSON.stringify(tempTitle));

      titleEditButtonBox.innerHTML = `<button class="button-change-info js-button-change-info">Edit</button>`;
      editTitle(document.querySelector('.js-button-change-info'));
    });

    const cancelTitleEditButton = document.querySelector('.js-cancel-title-edit-button');
    cancelTitleEditButton.addEventListener('click', () => {
      titleElement.innerHTML = title;

      titleEditButtonBox.innerHTML = `<button class="button-change-info js-button-change-info">Edit</button>`;
      editTitle(document.querySelector('.js-button-change-info'));
    });
  
  });
}
