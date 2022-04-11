/*document.getElementById("knop").addEventListener("click", plaatsafbeelding);
document.getElementById("rightleft").addEventListener("click", moveright);

let randomY;
let randomX;
let direction;
let move;
let x;
let y;
let horizontal;

function plaatsafbeelding(){

  direction = 1;

  document.getElementById("afbeelding").src = "eend.jpg";
  clearInterval(horizontal);

  x = window.innerWidth ;
  y = window.innerHeight - 127;
  randomX = Math.floor(Math.random()*x);
  randomY = Math.floor(Math.random()*y);
 
  document.getElementById("afbeelding").style.top = randomY + 'px';
  document.getElementById("afbeelding").style.left = randomX  + 'px';
   
}

function moveright(){
  clearInterval(horizontal);

  horizontal = setInterval(function(){
    if (direction == 1){
      randomX ++;
      document.getElementById("afbeelding").src = "eend.jpg";
      document.getElementById("afbeelding").style.left = randomX + 'px';

      console.log("direction1:", direction);

      if (randomX == x){
        direction = 2;
        console.log("direction2:", direction);
        
      }
  }

  else if (direction == 2){
    randomX --;
    document.getElementById("afbeelding").src = "eend2.jpg";
    document.getElementById("afbeelding").style.left = randomX + 'px';
    console.log("direction3:", direction);

    if (randomX <= 0){
      direction = 1;
      console.log("direction4:", direction);
    }
  }

  }, 1)
}*/



let img = new Image();
img.src = 'Green-Cap-Character-16x18.png';
img.onload = function() {
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
        frameX * width, frameY * height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
}

document.getElementById("canvas").onpointerdown = check;


function check() {
  console.log('joejoe')
}


function step() {
    frameCount++;
    console.log(frameCount)

    if (frameCount < 15) {
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
    }
}

function init() {
    window.requestAnimationFrame(step);
}

