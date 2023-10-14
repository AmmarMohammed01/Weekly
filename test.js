let webView = false;

let grandArr = JSON.parse(localStorage.getItem('grandArr'));
// let sunArr = [];
// let monArr = [];
// let tueArr = [];
// let wedArr = [];
// let thurArr = [];
// let friArr = [];
// let satArr = [];

if(!grandArr) {
  grandArr = [];
}
else {
  // sunArr = grandArr[0];
  // monArr = grandArr[1];
  // tueArr = grandArr[2];
  // wedArr = grandArr[3];
  // thurArr = grandArr[4];
  // friArr = grandArr[5];
  // satArr = grandArr[6];
  renderAll(); // CHANGE THIS
}

//lets you add task to memory and calls render function to update page
function addTodo(day) {
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;

  if(day === 'sunday') { //specific
    //this branch is only if input box is empty, it will clear box
    if(name === '') {
      sunArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(sunArr); //sp
      return;
    }

    sunArr.push({name, complete: false}); //sp
    inputElement.value = '';
    renderTodoList(sunArr); //sp
  } 
  else if(day === 'monday') { //specific
    if(name === '') {
      monArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(monArr); //sp
      return;
    }
    monArr.push(name); //sp
    inputElement.value = '';
    renderTodoList(monArr); //sp
  } 
  else if (day === 'tuesday') {
    if(name === '') {
      tueArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(tueArr); //sp
      return;
    }
    tueArr.push(name);
    inputElement.value = '';
    renderTodoList(tueArr);
  }
  else if (day === 'wednesday') {
    if(name === '') {
      wedArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(wedArr); //sp
      return;
    }
    wedArr.push(name);
    inputElement.value = '';
    renderTodoList(wedArr);
  }
  else if (day === 'thursday') {
    if(name === '') {
      thurArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(thurArr); //sp
      return;
    }
    thurArr.push(name);
    inputElement.value = '';
    renderTodoList(thurArr);
  }
  else if (day === 'friday') {
    if(name === '') {
      friArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(friArr); //sp
      return;
    }
    friArr.push(name);
    inputElement.value = '';
    renderTodoList(friArr);
  }
  else if (day === 'saturday') {
    if(name === '') {
      satArr = []; //specific
      localStorage.setItem('grandArr', JSON.stringify(grandArr));
      inputElement.value = '';
      renderTodoList(satArr); //sp
      return;
    }
    satArr.push(name);
    inputElement.value = '';
    renderTodoList(satArr);
  }
}

//whenever a change is made in any array, update the box on the page
function renderTodoList(dayList) {
  let todoHTML = '';

  for (let i = 0; i < dayList.length; i++) {
    const todo = dayList[i];
    let html = '';
    if(todo.complete === true) {
      html = `<div><input type='checkbox' checked>${todo.name}</div>`;
    }
    else {
      html = `<div><input type='checkbox' id='${todo.name}' onclick='completeTask(${todo.name});'>${todo.name}</div>`;
    }
    todoHTML += html;
  }

  if(dayList === sunArr) { //sp
    document.querySelector('.js-output1').innerHTML = todoHTML; //sp
    console.log(todoHTML);
  }
  else if(dayList === monArr) { //sp
    document.querySelector('.js-output2').innerHTML = todoHTML; //sp
    console.log(todoHTML);
  }
  else if (dayList === tueArr) {
    document.querySelector('.js-output3').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === wedArr) {
    document.querySelector('.js-output4').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === thurArr) {
    document.querySelector('.js-output5').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === friArr) {
    document.querySelector('.js-output6').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === satArr) {
    document.querySelector('.js-output7').innerHTML = todoHTML;
    console.log(todoHTML);
  }

  //grandArr = [sunArr, monArr, tueArr, wedArr, thurArr, friArr, satArr];
  console.log(grandArr);
  //console.log(JSON.stringify(grandArr));
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
}

//renders items of each day to the page
function renderAll() {
  console.log('running renderAll()');
  // renderTodoList(sunArr);
  // renderTodoList(monArr);
  // renderTodoList(tueArr);
  // renderTodoList(wedArr);
  // renderTodoList(thurArr);
  // renderTodoList(friArr);
  // renderTodoList(satArr);
}

//if clear all button is pressed all the tasks will be erased from page
function clearAll() {
  grandArr = [];
  // sunArr = [];
  // monArr = [];
  // tueArr = [];
  // wedArr = [];
  // thurArr = [];
  // friArr = [];
  // satArr = [];
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
  renderAll();
}

//This controls whether the user see website in light or dark mode
function webpageView() {
  const switchDayBox = document.querySelectorAll(".day-container");

  //if currently not dark mode
  if(webView === false) {
    webView = true;
    document.querySelector('body').style.background = 'black';
    document.querySelector('.title').style.color = 'white';
    document.querySelector('.info').style.color = 'white';
    
    //change each boxes border to white
    //use for loop b/c cannot be performed in one step
    for(let i = 0; i < switchDayBox.length; i++) {
      switchDayBox[i].style["border-color"] = 'white';
    }

    //change button dark/light mode button color
    document.querySelector('.button-view').style['background-color'] = 'white';
    document.querySelector('.button-view').style.color = 'black';
    document.querySelector('.button-view').innerHTML = 'Light Mode';
  }
  else {
    webView = false;
    document.querySelector('body').style.background = 'white';
    document.querySelector('.title').style.color = 'black';
    document.querySelector('.info').style.color = 'black';
    
    for(let i = 0; i < switchDayBox.length; i++) {
      switchDayBox[i].style["border-color"] = 'black';
    }

    document.querySelector('.button-view').style['background-color'] = 'black';
    document.querySelector('.button-view').style.color = 'white';
    document.querySelector('.button-view').innerHTML = 'Dark Mode';
  }
}

//Ability to mark tasks complete
function completeTask(elementID) {
  //console.log(elementID); //elementID is the input box itself
  setTimeout(() => { elementID.checked = false; }, 2000);

}

//reconstruct the code so that we only have the grand array, and each task has a property of name, day, and completed status

//remove mention of individual day arrays, just have grand array. To clear day array, remove each element that has the specific day, like todo.day === "Monday"