let webView = false;
//This controls whether the user see website in light or dark mode
function webpageView() {
  const switchDayBox = document.querySelectorAll(".day-container");
  const switchDayButton = document.querySelectorAll('.button-day')

  //if currently not dark mode
  if(webView === false) {
    webView = true;
    document.querySelector('html').style.background = 'black';
    document.querySelector('body').style.background = 'black';
    document.querySelector('.title').style.color = 'white';
    document.querySelector('.info').style.color = 'white';
    document.querySelector('.week-info').style.color = 'white';
    
    //change each boxes border to white
    //use for loop b/c cannot be performed in one step
    for(let i = 0; i < switchDayBox.length; i++) {
      //switchDayBox[i].style["border-color"] = 'white';
      switchDayBox[i].style.color = 'white';

      //change buttons for day
      // switchDayButton[i].style['background-color'] = 'white';
      // switchDayButton[i].style.color = 'black';
    }

    //change button dark/light mode button color
    document.querySelector('.button-view').style['background-color'] = 'white';
    document.querySelector('.button-view').style.color = 'black';
    document.querySelector('.button-view').innerHTML = 'Light Mode';

  }
  else {
    webView = false;
    document.querySelector('html').style.background = 'rgb(200,200,200)';
    document.querySelector('body').style.background = 'rgba(200,200,200,0.9)';
    document.querySelector('.title').style.color = 'black';
    document.querySelector('.info').style.color = 'black';
    document.querySelector('.week-info').style.color = 'black';
    
    for(let i = 0; i < switchDayBox.length; i++) {
      //switchDayBox[i].style["border-color"] = 'black';
      switchDayBox[i].style.color = 'black';

      //change buttons for day
      // switchDayButton[i].style['background-color'] = 'black';
      // switchDayButton[i].style.color = 'white';
    }

    document.querySelector('.button-view').style['background-color'] = 'black';
    document.querySelector('.button-view').style.color = 'white';
    document.querySelector('.button-view').innerHTML = 'Dark Mode';
  }
}

