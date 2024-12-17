let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//START: Load in the week, all the day boxes
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
//FINISH: Load in the week, all the day boxes

//START: Add buttons change to input box
const addButtons = document.querySelectorAll('.js-add-button');
addButtons.forEach( (button) => {
  button.addEventListener('click', () => {
    const {day} = button.dataset;
    const addBox = document.querySelector(`.js-add-box-${day}`);
    addBox.classList.add('css2-add-box');

    addBox.innerHTML = `
    <input class="css2-input" placeholder="Type task to add">
    <button>+</button>
    `;
  });
});