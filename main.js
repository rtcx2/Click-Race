//get the size of the document file for later

//$(document).height();
//$(document).width();
//window.screen.height;
//window.screen.width;

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
let colordiv = document.getElementById("Color")
let allButtons = [play1button, play2button, play3button, play4button, play5button, play6button, play7button, play8button, play9button]
let play2buttons = document.getElementsByClassName("playbutton")
let playerScore = 0
let allColors = ["blue ", "green", "red", "orange", "magenta", "purple", "yellow", "grey", "pink"]
let goalNumber = 45
let gameState = false
let timeleft = 60
//let randomheight = Math.floor(Math.random() * htmlheight);
//let randomwidth = Math.floor(Math.random() * htmlwidth);
//this allows me to choose the random integer's ranges
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  //Will determine the color needed to click on and the color of the buttons
function changeColor(){
  play1button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play2button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play3button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play4button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play5button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play6button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play7button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play8button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  play9button.style.backgroundColor = allColors[getRndInteger(0, allColors.length)]
  colordiv.style.color = (allButtons[getRndInteger(0, allColors.length)]).style.backgroundColor;
  }
  //This took up most of my time in the project it was really hard figuring out how to move the buttons randomly on the screen

function moveButton(){
    play1button.style.margin = getRndInteger(1, 30) + "px "+ getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play2button.style.margin = getRndInteger(1, 30)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play3button.style.margin = getRndInteger(1, 30)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play4button.style.margin = getRndInteger(1, 20)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play5button.style.margin = getRndInteger(1, 20)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play6button.style.margin = getRndInteger(1, 20)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play7button.style.margin = getRndInteger(1, 20)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play8button.style.margin = getRndInteger(1, 20)+"px "+getRndInteger(1, 500) +"px "+getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    play9button.style.margin = getRndInteger(1, 10)+"px "+getRndInteger(1, 500) +"px " +getRndInteger(1, 40) + "px "+ getRndInteger(1, 500) +"px";
    //Trial and error code below
    //play1button.style.marginBottom = randomheight+"px";
   // play1button.style.left = randomwidth+ "px";
    //play1button.style.top = randomheight+"px";

    //The code below gave me a style error I could not work around but it did work for some reason. I just didn't want to deal with the style error
   /* for (let i = 0; i < 10; i++){
      console.log(allButtons[i])
      allButtons[i].style.margin = getRndInteger(1, 50) + "px "+ getRndInteger(1, 700) +"px "+getRndInteger(1, 50) + "px "+ getRndInteger(1, 700) +"px"
    } */
}
function startGame() {
  timeleft = 60
  goalNumber = 45
  playerScore = 0
  document.getElementById("points").innerHTML = "Score: "+ playerScore
  document.getElementById("title").style.display = "none"
  document.getElementById("Score").style.display = "block"
  document.getElementById("timer").innerHTML = "Timer: "+ timeleft
  document.getElementById("playbuttons").onclick = determinebuton;
  document.getElementById("goal").innerHTML = "Goal: "+ goalNumber
  document.getElementById("gameover").style.display = "none"
  document.getElementById("endbuttons").style.display = "none"
  gameState = true
  divbuttons.style.display = "block"
    moveButton()
    changeColor()
    gametime()
}
//Sets the timer for the game
function gametime(){

  function increment(value, step){
  return value-=step
  }
      interval = setInterval(()=>{
        timeleft = increment(timeleft, 1) 
        document.getElementById("timer").innerHTML = "Timer: "+ timeleft
        if(timeleft === 0){
              if(goalNumber <= playerScore){
                document.getElementById("gameover").innerHTML = "You Win!!!"
              }
              else{
                document.getElementById("gameover").innerHTML = "You Lose..."
              }
          document.getElementById("gameover").style.display = "block"
          document.getElementById("endbuttons").style.display = "block"
          divbuttons.style.display = "none"
          gameState = false  
          clearInterval(interval)
        }

        }, 1000)

}
//Determines whether the player picked the right button or not
function determinebuton(e) {
  if (e.target.tagName == 'BUTTON' && gameState === true) {
    if(  colordiv.style.color == document.getElementById(e.target.id).style.backgroundColor){
      playerScore = playerScore + 1
      document.getElementById("points").innerHTML = "Score: "+ playerScore
              moveButton()
              changeColor()
    }
    else{
      playerScore = playerScore - 1
      document.getElementById("points").innerHTML = "Score: "+ playerScore
      moveButton()
      changeColor()
    }
  }
}
function rgb(){
  if( document.body.style.backgroundImage === "url('rgb.gif')"){
    document.body.style.backgroundImage = "url('normal')"
  }
  else{
    document.body.style.backgroundImage = "url('rgb.gif')"
  }

}
function menu(){
  document.getElementById("title").style.display = "block"
  document.getElementById("Score").style.display = "none"
  document.getElementById("gameover").style.display = "none"
  document.getElementById("endbuttons").style.display = "none"
}

function howtoplay(){
  document.getElementById("title").style.display = "none"
  document.getElementById("howtoplay").style.display = "block"
}
function backbutton(){
  document.getElementById("title").style.display = "block"
  document.getElementById("howtoplay").style.display = "none"
}

function changingtitleFont(){

    interval = setInterval(()=>{
    document.getElementById("title").style.color = allColors[getRndInteger(0, allColors.length)]
      }, 500)
}
changingtitleFont()

//document.getElementById("myDiv").style.margin = "500px 100px 200px 300px";
  




