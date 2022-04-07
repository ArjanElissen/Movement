document.getElementById("knop").addEventListener("click", plaatsafbeelding);
document.getElementById("rightleft").addEventListener("click", moveright);
document.getElementById("updown").addEventListener("click", moveup);
document.getElementById("diagonaal").addEventListener("click", diagonaal);
document.addEventListener('keydown', murdermode);

var duck_sound;
var auto_duck;
var randomY;
var randomX;
var direction;
var vdirection;
var move;
var x;
var y;
var diagonal;
var horizontal;
var vertical;

function plaatsafbeelding(){

  direction = 1;
  vdirection = 1;

  document.getElementById("afbeelding").src = "eend.jpg";
  duck_sound = setInterval(geluid, 5);
  clearInterval(auto_duck);
  clearInterval(horizontal);
  clearInterval(vertical);
  clearInterval(diagonal);

  // auto_quack();
  
  x = window.innerWidth - 200;
  y = window.innerHeight - 127;
  randomX = Math.floor(Math.random()*x);
  randomY = Math.floor(Math.random()*y);
 
  document.getElementById("afbeelding").style.top = randomY + 'px';
  document.getElementById("afbeelding").style.left = randomX  + 'px';
   
}

function geluid() {
  var quack = new Audio();
  quack.src = "Quack.mp3";
  quack.play();
  clearInterval(duck_sound);
}

function auto_quack() {
  auto_duck = setInterval(geluid, Math.floor(Math.random()*1000 + 100));
}

function moveright(){
  clearInterval(horizontal);
  clearInterval(vertical);
  clearInterval(diagonal);

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
}

function moveup(){
  clearInterval(horizontal);
  clearInterval(vertical);
  clearInterval(diagonal);

  vertical = setInterval(function(){
    if (vdirection == 1){
      randomY ++;
      document.getElementById("afbeelding").style.top = randomY + 'px';

      console.log("vdirection1:", vdirection);

      if (randomY == y){
        vdirection = 2;
        console.log("vdirection2:", vdirection);
        
      }
  }

  else if (vdirection == 2){
    randomY --;
    document.getElementById("afbeelding").style.top = randomY + 'px';
    console.log("direction3:", vdirection);

    if (randomY <= 0){
      vdirection = 1;
      console.log("vdirection4:", vdirection);
    }
  }

  }, 1)

}

function diagonaal() {
    clearInterval(horizontal);
    clearInterval(vertical);
    clearInterval(diagonal)
  
    diagonal = setInterval(function(){
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

    if (vdirection == 1){
      randomY ++;
      document.getElementById("afbeelding").style.top = randomY + 'px';

      console.log("vdirection1:", vdirection);

      if (randomY == y){
        vdirection = 2;
        console.log("vdirection2:", vdirection);
        
      } 
  }

  else if (vdirection == 2){
    randomY --;
    document.getElementById("afbeelding").style.top = randomY + 'px';
    console.log("direction3:", vdirection);

    if (randomY <= 0){
      vdirection = 1;
      console.log("vdirection4:", vdirection);
    }
  }  
    }, 1)
  }


function murdermode(e){
    console.log(e.key)

    if (e.key == 'h' || e.key == 'H'){
      console.log("MURDER MODE ACTIVATED!");
      console.log("direction", direction)

      if (direction == 1) {
        var death = document.getElementById("afbeelding");
        death.classList.remove("murderleft")
        death.classList.toggle("murderright");
      }

      else if (direction == 2 ){
        var death = document.getElementById("afbeelding");
        death.classList.remove("murderright");
        death.classList.toggle("murderleft");
      }

    }
}