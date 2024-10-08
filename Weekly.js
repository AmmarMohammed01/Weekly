const dayBoxes = ['.js-output1', '.js-output2', '.js-output3', '.js-output4', '.js-output5', '.js-output6', '.js-output7'];
let tasksArray = JSON.parse(localStorage.getItem('tasksArray')); //stores every task entered by user

//if task array is not in local storage, create empty array
if(!tasksArray) {
  tasksArray = [];
}

console.log('Loading TaskArray: ' + JSON.stringify(tasksArray));

renderAll();

//lets you add task to memory and calls render function to update page
function addTodo(daySelect) {
  //get input box and its value
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;

  if(name !== "") {
    const newTask = {name, day: daySelect, isCompleted: false};

    tasksArray.push(newTask); //add task to array
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray)); //save array to storage
  
    //console.log(tasksArray.length);
    currentIndexOfTask = tasksArray.length - 1;
    //console.log(currentIndexOfTask);
  
    inputElement.value = '';
    //console.log(tasksArray);
  
    renderTask(newTask, currentIndexOfTask);
  }
  else {
    alert("Cannot add blank item!");
  }
  //printArray(tasksArray);
}

function clearDay(daySelect) {
  //first empty day box html
  document.querySelector(dayBoxes[daySelect]).innerHTML = '';

  //store indecies of tasks with certain day value here
  /*In tasksArray, all the tasks are stored.
  The daySelect is an integer corresponding to the day the button
  was pressed. Example: Sunday is day 0, Monday is day 1...
  Now look at the task in the task array and see its "day" 
  attribute. If the day matches with the daySelect from remove button, then put that index in a new array.*/
  let tasksToRemove = [];
  for(let i = 0; i < tasksArray.length; i++) {
    if(tasksArray[i].day === daySelect) {
      tasksToRemove.push(i);
    }
    console.log(tasksToRemove);
  }

  //remove tasks at the indicies
  if(tasksToRemove.length !== 0) {
    for(let i = 0; i < tasksToRemove.length; i++){
      console.log(`At index ${i}: ${JSON.stringify(tasksArray[tasksToRemove[i] - i])}`);
      tasksArray.splice(tasksToRemove[i] - i,1); //tasktorem array value minus loop index because taskArray changing in size
    }
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
    console.log('Tasks removed!');
  }
  else {
    console.log('No tasks removed');
  }
  renderAll();
}

//whenever a change is made in any array, update the box on the page
function renderTask(newTask, buttonID) {
  const daySelect = newTask.day;
  document.querySelector(dayBoxes[daySelect]).innerHTML += `<div style="margin: 10px 5px;"><button class="checkbox-button" id="${buttonID}" onclick="
  completeTask(${buttonID})
  "></button> ${newTask.name}</div>`;
  console.log('New task added.');
}

//if clear all button is pressed all the tasks will be erased from page
function clearAll() {
  tasksArray = []; //empty array
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray)); //save to local storage
  //console.log(tasksArray);

  for(let i = 0; i < dayBoxes.length; i++) {
    document.querySelector(dayBoxes[i]).innerHTML = ''; //update html to blank
  }
  console.log('All tasks cleared.');
}

function renderAll() {
  weekInfoText = document.querySelector('.js-change-info');
  weekInfoText.innerHTML = localStorage.getItem('weekInfo');

  if(!weekInfoText.innerHTML) {
    weekInfoText.innerHTML = 'Use input box to enter date range here...';
  }

  if(tasksArray.length !== 0) {
    for(let i = 0; i < dayBoxes.length; i++) {
      document.querySelector(dayBoxes[i]).innerHTML = '';
    }

    for(let i = 0; i < tasksArray.length; i++) {
      const taskName = tasksArray[i].name;
      const daySelect = tasksArray[i].day;
      const taskCompleted = tasksArray[i].isCompleted;

      document.querySelector(dayBoxes[daySelect]).innerHTML += `<div style="margin: 10px 5px;"><button class="checkbox-button" id="${i}" onclick="completeTask(${i});"></button> ${taskName}</div>`;

      if(taskCompleted) {
        document.getElementById(i).style['background-color'] = "rgba(0,255,0,0.6)"; //rgb(0,180,255)
        document.getElementById(i).innerHTML = "&#10003;";
      }
      
    }
    console.log('Existing tasks loaded.');
  }
  else {
    console.log('No existing tasks found to load. Add tasks to get started.');
  }
}

function printArray(taskList) {
  for(let i = 0; i < taskList.length; i++) {
    console.log(`${i}: ${taskList[i].name}, Day: ${taskList[i].day}`);
  }
}

let editButtonCounter = 0;

function changeInfo() {
  inputElement = document.querySelector('.js-input-name');
  textElement = document.querySelector('.js-change-info');
  textElement.innerHTML = inputElement.value;

  if(textElement.innerHTML === '') {
    textElement.innerHTML = 'Use input box to enter date range here...';
  }

  localStorage.setItem('weekInfo', inputElement.value);

  inputElement.value = '';

}

function completeTask(buttonID) {
  //console.log(buttonID);
  buttonElement = document.getElementById(buttonID);
  
  //console.log(buttonElement.style['background-color']);
  //currently background-color white applies to checkbox-button class, but not id - that is why this branch below initially sets up the background-color for each button by "id" when passed to function
  //The first time you load the page, background-color is actually blank/white
  if(!buttonElement.style['background-color']) {
    buttonElement.style['background-color'] = 'white';
  }

  if(buttonElement.style['background-color'] == 'white') {
    buttonElement.style['background-color'] = 'rgba(0,255,0,0.6)';
    buttonElement.innerHTML = "&#10003;";
    tasksArray[buttonID].isCompleted = true;
  }
  else {
    buttonElement.style['background-color'] = 'white';
    buttonElement.innerHTML = ""; //&#8226;
    tasksArray[buttonID].isCompleted = false;
  }
  localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
}