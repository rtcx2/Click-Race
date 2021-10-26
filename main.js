//get the size of the document file for later
//Source - https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
//$(document).height();
//$(document).width();
//window.screen.height;
//window.screen.width;

// http://www.mendoweb.be/blog/javascript-random-element-position/ Source for random position
let htmlheight = document.documentElement.clientHeight;
let htmlwidth = document.documentElement.clientWidth;

let randomheight = Math.floor(Math.random() * htmlheight);
let randomwidth = Math.floor(Math.random() * htmlwidth);


var myElem = document.getElementByID('play2');
myElem.onclick = function() {
        document.getElementById("play2").style.left = "100px";
        document.getElementById("play2").style.left = "100px";
        
}
document.getElementById("play1").onclick = function() {moveButton()};

moveButton()



console.log("Document height: " + randomheight);
console.log("Document width: " + randomwidth);