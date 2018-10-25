// pacman.js
var ghosts_left  = ['ghost_1.png','ghost_3.png','ghost_5.png','ghost_7.png'];
var ghosts_right = ['ghost_0.png','ghost_2.png','ghost_4.png','ghost_6.png'];
var ghost_colors = ['red','orange','pink','blue'];
var pacman = 'pacman-move.gif';
var gwid = 19;
var ghei = 19;
var pixel_size = 25;
var pman = document.getElementById('pacman');
var layout = [ // 0 = empty, 1 = solid
/*
                                     1   1   1   1   1   1   1   1   1   1
 1   2   3   4   5   6   7   8   9   0   1   2   3   4   5   6   7   8   9*/
'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1', //1
'1','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1', //2
'1','0','1','1','0','1','1','1','0','1','0','1','1','1','0','1','1','0','1', //3
'1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1', //4
'1','0','1','1','0','1','0','1','1','1','1','1','0','1','0','1','1','0','1', //5
'1','0','0','0','0','1','0','0','0','1','0','0','0','1','0','0','0','0','1', //6
'1','1','1','1','0','1','1','1','0','1','0','1','1','1','0','1','1','1','1', //7
'0','0','0','1','0','1','0','0','0','0','0','0','0','1','0','1','0','0','0', //8
'1','1','1','1','0','1','0','1','1','0','1','1','0','1','0','1','1','1','1', //9
'0','0','0','0','0','0','0','1','0','0','0','1','0','0','0','0','0','0','0', //10
'1','1','1','1','0','1','0','1','1','1','1','1','0','1','0','1','1','1','1', //11
'0','0','0','1','0','1','0','0','0','0','0','0','0','1','0','1','0','0','0', //12
'1','1','1','1','0','1','1','1','0','1','0','1','1','1','0','1','1','1','1', //13
'1','0','0','0','0','1','0','0','0','1','0','0','0','1','0','0','0','0','1', //14
'1','0','1','1','0','1','0','1','1','1','1','1','0','1','0','1','1','0','1', //15
'1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1', //16
'1','0','1','1','0','1','1','1','0','1','0','1','1','1','0','1','1','0','1', //17
'1','0','0','0','0','0','0','0','0','1','0','0','0','0','0','0','0','0','1', //18
'1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'  //19
  
] // Right now, its a blank cavas with padding at the edges. Reminder: Add in solid surfaces & actually script hitboxes & generation of the layout.
function retEl(x,y){
return y*ghei+x;
}
document.getElementById('pacman').style.transform = 'rotate(270deg)'
var audio = document.getElementById('movesfx')
var movex = 0;
var movey = 0;
var pacpos = [9,15];
pman.style.left = pixel_size*9+8+'px';
pman.style.top = pixel_size*15+8+'px';
var gh1pos = [0,0];
var gh2pos = [0,0];
var gh3pos = [0,0];
var gh4pos = [0,0];
var pdir = 90;
var wc = 0;
var hc = 0;
document.onkeydown = function (e) {
    switch (e.key) {
      case 'w':
        case 'ArrowUp':
            pdir = 270
            movex = 0
        movey = -1
        document.getElementById('pacman').style.transform = 'rotate(270deg)'
            break;
        case 's':
        case 'ArrowDown':
        movex = 0
        movey = 1
            pidir = 90
        document.getElementById('pacman').style.transform = 'rotate(90deg)'
            break;
        case 'a':
        case 'ArrowLeft':
        movex = -1
        movey = 0
            pdir = 180
        document.getElementById('pacman').style.transform = 'rotate(180deg)'
            break;
        case 'd':
        case 'ArrowRight':
        movex = 1
        movey = 0
            pdir = 0
        document.getElementById('pacman').style.transform = 'rotate(0deg)'
            break;
    }
};
audio.volume = '0.2'
document.getElementById('pacman').setAttribute('src','http://borkode.github.io/pacman/pacman-move.gif');
document.getElementById('pacman').style.width=pixel_size+'px';
document.getElementById('pacman').style.height=pixel_size+'px';
document.getElementById('pacman').style.position = 'absolute'
// Layout generation using array "layout"
var l = document.getElementById('layout')
l.setAttribute('width',pixel_size*gwid);
l.setAttribute('height',pixel_size*ghei);

function move(m){
  audio.play();
  if(layout[retEl(pacpos[0]+movex,pacpos[1]+movey)]!=1){
pman.style.left = pman.getBoundingClientRect().left+pixel_size*movex*m+'px';
pman.style.top = pman.getBoundingClientRect().top +pixel_size*movey*m+'px';
pacpos[0]=Math.floor(pman.getBoundingClientRect().left/pixel_size);
pacpos[1]=Math.floor(pman.getBoundingClientRect().top/pixel_size);
  }else{
    stopMoving();
  }
}

setInterval(function(){
move(1);
},250);
function stopMoving(){
x = 0
movey = 0
return true
}


// Pellet time

var basePellets = [ // 0 = empty, 1 = pellet, 2 = mega pellet
/*
                                     1   1   1   1   1   1   1   1   1   1
 1   2   3   4   5   6   7   8   9   0   1   2   3   4   5   6   7   8   9*/
'0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', // 1
'0','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','2','0', // 2
'0','1','0','0','1','0','0','0','1','0','1','0','0','0','1','0','0','1','0', // 3
'0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0', // 4
'0','1','0','0','1','0','1','0','0','0','0','0','1','0','1','0','0','1','0', // 5
'0','2','1','1','1','0','1','1','1','0','1','1','1','0','1','1','1','1','0', // 6
'0','0','0','0','1','0','0','0','1','0','1','0','0','0','1','0','0','0','0', // 7
'0','0','0','0','1','0','1','1','1','1','1','1','1','0','1','0','0','0','0', // 8
'0','0','0','0','1','0','1','0','0','0','0','0','1','0','1','0','0','0','0', // 9
'1','1','1','1','1','1','1','0','0','0','0','0','1','1','1','1','1','1','1', // 10
'0','0','0','0','1','0','1','0','0','0','0','0','1','0','1','0','0','0','0', // 11
'0','0','0','0','1','0','1','1','1','1','1','1','1','0','1','0','0','0','0', // 12
'0','0','0','0','1','0','0','0','1','0','1','0','0','0','1','0','0','0','0', // 13
'0','1','1','1','1','0','1','1','1','0','1','1','1','0','1','1','1','2','0', // 14
'0','1','0','0','1','0','1','0','0','0','0','0','1','0','1','0','0','1','0', // 15
'0','2','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','0', // 16
'0','1','0','0','1','0','0','0','1','0','1','0','0','0','1','0','0','1','0', // 17
'0','1','1','1','1','1','1','1','1','0','1','1','1','1','1','1','1','1','0', // 18
'0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0', // 19
]
var curPellets = basePellets
var pellets = 0;
var pelcount = document.getElementById('pellets');
setInterval(function(){
pelcount.innerHTML=pellets*10
},1);
document.getElementById('pelletimgs').style.width=pixel_size+'px';
document.getElementById('pelletimgs').style.height=pixel_size+'px';
var basepel= document.getElementById('pellet1');
var pelletEl = [];
// Okay, so what I want to do is basically replicate the hitbox function but instead of stopping the user, it adds 1 to the pellets variable
setInterval(function(){
  if(curPellets[retEl(pacpos[0],pacpos[1])]=='1'){
   pellets++
    curPellets[retEl(pacpos[0],pacpos[1])] = '0';
  }
},1);
var x = 0;
while(x<basePellets.length){
  if(basePellets[x]=='1'){
  var itm = document.getElementById('pellet'+x.toString());
  var cln = itm.cloneNode(true);
    document.getElementById("pelletimgs").appendChild(cln);
  cln.setAttribute('id','pellet'+(x+1).toString())
 pelletEl.push(cln) 
  }
  x += 1
}
