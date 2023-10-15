let tasksArray = JSON.parse(localStorage.getItem('tasksArray'));

if(!tasksArray) {
  tasksArray = [];
}

console.log('Loading TaskArray: ' + JSON.stringify(tasksArray));

const dayBoxes = ['.js-output1', '.js-output2', '.js-output3', '.js-output4', '.js-output5', '.js-output6', '.js-output7'];

renderAtLaunch();

//lets you add task to memory and calls render function to update page
function addTodo(daySelect) {
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;

  const newTask = {name, day: daySelect, isCompleted: false};

  tasksArray.push(newTask); //add task to array
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray)); //save array to storage

  inputElement.value = '';
  console.log(tasksArray);

  renderTask(newTask);
}

//whenever a change is made in any array, update the box on the page
function renderTask(newTask) {
  const daySelect = newTask.day;

  let html = `<div>${newTask.name}</div>`;

  document.querySelector(dayBoxes[daySelect]).innerHTML += html;
}

//if clear all button is pressed all the tasks will be erased from page
function clearAll() {
  tasksArray = []; //empty array
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray)); //save to local storage
  console.log(tasksArray);

  for(let i = 0; i < dayBoxes.length; i++) {
    document.querySelector(dayBoxes[i]).innerHTML = '';
  }
}

function renderAtLaunch() {
  if(tasksArray) {
    for(let i = 0; i < tasksArray.length; i++) {
      const taskName = tasksArray[i].name;
      const daySelect = tasksArray[i].day;
      document.querySelector(dayBoxes[daySelect]).innerHTML = `<div>${taskName}</div>`;
    }
    console.log('Previous tasks loaded successfully.');
  }
  else {
    console.log('No existing tasks found to load. Add tasks to get started.');
  }
}

//reconstruct the code so that we only have the grand array, and each task has a property of name, day, and completed status

//remove mention of individual day arrays, just have grand array. To clear day array, remove each element that has the specific day, like todo.day === "Monday"