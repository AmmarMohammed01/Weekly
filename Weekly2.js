let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
  
    <button class>Add</button>
  
  </div>`;
});

weekContainer.innerHTML = outputHTML;
