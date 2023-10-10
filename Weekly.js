let grandArr = JSON.parse(localStorage.getItem('grandArr'));
let sunArr = grandArr[0];
let monArr = grandArr[1];
let tueArr = grandArr[2];
let wedArr = grandArr[3];
let thurArr = grandArr[4];
let friArr = grandArr[5];
let satArr = grandArr[6];

if(!grandArr) {
  grandArr = [];
  sunArr = [];
  monArr = [];
  tueArr = [];
  wedArr = [];
  thurArr = [];
  friArr = [];
  satArr = [];
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

  if(day === 'sunday') { //specific
    sunArr.push(name); //sp
    inputElement.value = '';
    renderTodoList(sunArr); //sp
  } 
  else if(day === 'monday') { //specific
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
  else if (day === 'saturday') {
    satArr.push(name);
    inputElement.value = '';
    renderTodoList(satArr);
  }
}

function renderTodoList(dayList) {
  let todoHTML = '';

  for (let i = 0; i < dayList.length; i++) {
    const todo = dayList[i];
    const html = `<p>${todo}</p>`;
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

  grandArr = [sunArr, monArr, tueArr, wedArr, thurArr, friArr, satArr];
  console.log(grandArr);
  //console.log(JSON.stringify(grandArr));
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
}

function renderAll() {
  console.log('running renderAll()');
  renderTodoList(sunArr);
  renderTodoList(monArr);
  renderTodoList(tueArr);
  renderTodoList(wedArr);
  renderTodoList(thurArr);
  renderTodoList(friArr);
  renderTodoList(satArr);
}

function clearAll() {
  grandArr = [];
  sunArr = [];
  monArr = [];
  tueArr = [];
  wedArr = [];
  thurArr = [];
  friArr = [];
  satArr = [];
  localStorage.setItem('grandArr', JSON.stringify(grandArr));
  renderAll();
}