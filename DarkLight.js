let webView = false;
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
