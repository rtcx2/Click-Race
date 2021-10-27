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

let htmlheight = document.documentElement.clientHeight;
let htmlwidth = document.documentElement.clientWidth;

//let randomheight = Math.floor(Math.random() * htmlheight);
//let randomwidth = Math.floor(Math.random() * htmlwidth);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function moveButton(){
    play1button.style.margin = getRndInteger(1, 200) + "px "+ getRndInteger(1, 200) +"px";
    play2button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play3button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play4button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play5button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play6button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play7button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play8button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    play9button.style.margin = getRndInteger(1, 200)+"px "+getRndInteger(1, 200) +"px";
    //play1button.style.marginBottom = randomheight+"px";
   // play1button.style.left = randomwidth+ "px";
    //play1button.style.top = randomheight+"px";
}

//document.getElementById("myDiv").style.margin = "500px 100px 200px 300px";
  




