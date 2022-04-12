//sprite bepalen en laden
let img = new Image();
img.src = 'Green-Cap-Character-16x18.png';
img.onload = function() {
    init();
};
 
//sprite op canvas zetten met goede frame
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let touch;
 
const scale = 2;
const width = 16;
const height = 18;
const scaledWidth = scale * width;
const scaledHeight = scale * height;
 
function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
        frameX * width, frameY * height, width, height,
        canvasX, canvasY, scaledWidth, scaledHeight);
}

const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
 
 //touch event, touchstart is je vinger op het scherm is, touchend is als je vinger niet meer op het scherm is
document.getElementById("canvas").addEventListener("touchstart", function (){touch = true});
document.getElementById("canvas").addEventListener("touchend", function (){touch = false});


 //sprite laten lopen als het scherm aangeraakt wordt
function step() {

  if (touch){
    frameCount++; 
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
  //als er niet meer op het scherm gedrukt wordt, dan maakt hij het scherm leeg en zet de eerste frame op het canvas
  else
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[0], 0, 0, 0);
  }
  window.requestAnimationFrame(step);

}
 
function init() {
  window.requestAnimationFrame(step);
}
