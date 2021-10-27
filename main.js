//get the size of the document file for later
//Source - https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
//$(document).height();
//$(document).width();
//window.screen.height;
//window.screen.width;

// http://www.mendoweb.be/blog/javascript-random-element-position/ Source for random position
let play1button = document.getElementById("play1")
let play2button = document.getElementById("play2")
let play3button = document.getElementById("play3")
let play4button = document.getElementById("play4")
let play5button = document.getElementById("play5")
let play6button = document.getElementById("play6")
let play7button = document.getElementById("play7")
let play8button = document.getElementById("play8")
let play9button = document.getElementById("play9")
let divbuttons = document.getElementById("playbuttons")
let allButtons = [play1button, play2button, play3button, play4button, play5button, play6button, play7button, play8button, play9button]
let play2buttons = document.getElementsByClassName("playbutton")

//let randomheight = Math.floor(Math.random() * htmlheight);
//let randomwidth = Math.floor(Math.random() * htmlwidth);
//this allows me to choose the random integer's ranges
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function changeColor(){
  let allColors = ["blue ", "green", "red", "orange", "magenta", "purple", "yellow", "grey", "pink"]
  let chosenColors = []
  play1button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play2button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play3button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play4button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play5button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play6button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play7button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play8button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play9button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  }
  //This took up most of my time in the project it was really hard figuring out how to move the buttons randomly on the screen

function moveButton(){
    play1button.style.margin = getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play2button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play3button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play4button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play5button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play6button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play7button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play8button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play9button.style.margin = getRndInteger(1, 40)+"px "+getRndInteger(1, 500) +"px " +getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";

    changeColor()
    //Trial and error code below
    //play1button.style.marginBottom = randomheight+"px";
   // play1button.style.left = randomwidth+ "px";
    //play1button.style.top = randomheight+"px";

   /* for (let i = 0; i < 10; i++){
      console.log(allButtons[i])
      allButtons[i].style.margin = getRndInteger(1, 50) + "px "+ getRndInteger(1, 700) +"px "+getRndInteger(1, 50) + "px "+ getRndInteger(1, 700) +"px"
    } */
}
function startGame() {
  document.getElementById("startbutton").style.display = "none"
  document.getElementById("title").style.display = "none"
  document.getElementById("playbuttons").onclick = determinebuton;

  divbuttons.style.display = "block"
    moveButton()
    changeColor()
}

function determinebuton(e) {
  if (e.target.tagName == 'BUTTON') {
    moveButton()
    changeColor()
  }
}
//document.getElementById("myDiv").style.margin = "500px 100px 200px 300px";
  




