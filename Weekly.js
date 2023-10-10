let grandArr = JSON.parse(localStorage.getItem('grandArr'));
let monArr = grandArr[0];
let tueArr = grandArr[1];
let wedArr = grandArr[2];
let thurArr = grandArr[3];
let friArr = grandArr[4];

if(!grandArr) {
  grandArr = [];
  monArr = [];
  tueArr = [];
  wedArr = [];
  thurArr = [];
  friArr = [];
}
else {
  renderAll();
}

function addTodo(day) {
  const inputElement = document.querySelector('.js-input-name');
  const name = inputElement.value;
  
  if(name === '') {
    console.log('Do not add empty item to list!');
    return;
  }

  if(day === 'monday') { //specific
    monArr.push(name); //sp
    inputElement.value = '';
    renderTodoList(monArr); //sp
  } 
  else if (day === 'tuesday') {
    tueArr.push(name);
    inputElement.value = '';
    renderTodoList(tueArr);
  }
  else if (day === 'wednesday') {
    wedArr.push(name);
    inputElement.value = '';
    renderTodoList(wedArr);
  }
  else if (day === 'thursday') {
    thurArr.push(name);
    inputElement.value = '';
    renderTodoList(thurArr);
  }
  else if (day === 'friday') {
    friArr.push(name);
    inputElement.value = '';
    renderTodoList(friArr);
  }
}

function renderTodoList(dayList) {
  let todoHTML = '';

  for (let i = 0; i < dayList.length; i++) {
    const todo = dayList[i];
    const html = `<p>${todo}</p>`;
    todoHTML += html;
  }

  if(dayList === monArr) { //sp
    document.querySelector('.js-output1').innerHTML = todoHTML; //sp
    console.log(todoHTML);
  }
  else if (dayList === tueArr) {
    document.querySelector('.js-output2').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === wedArr) {
    document.querySelector('.js-output3').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === thurArr) {
    document.querySelector('.js-output4').innerHTML = todoHTML;
    console.log(todoHTML);
  }
  else if (dayList === friArr) {
    document.querySelector('.js-output5').innerHTML = todoHTML;
    console.log(todoHTML);
  }

  grandArr = [monArr, tueArr, wedArr, thurArr, friArr];
  console.log(grandArr);
  //console.log(JSON.stringify(grandArr));
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
}

function renderAll() {
  console.log('running renderAll()');
  renderTodoList(monArr);
  renderTodoList(tueArr);
  renderTodoList(wedArr);
  renderTodoList(thurArr);
  renderTodoList(friArr);
}

function clearAll() {
  grandArr = [];
  monArr = [];
  tueArr = [];
  wedArr = [];
  thurArr = [];
  friArr = [];
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
  renderAll();
}