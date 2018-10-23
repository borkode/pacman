// pacman.js
var ghosts_left  = ['ghost_1.png','ghost_3.png','ghost_5.png','ghost_7.png'];
var ghosts_right = ['ghost_0.png','ghost_2.png','ghost_4.png','ghost_6.png'];
var ghost_colors = ['red','orange','pink','blue'];
var pacman = 'pacman-move.gif';
var gwid = 19;
var ghei = 19;
var pixel_size = 25;
var layout = [ // 0 = empty, 1 = solid, 2 = regular pellet, 3 = mega pellet
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
var movex = 1;
var movey = 0;
var pacpos = [0,0];
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
      case 'shiftKey':
        stopMoving();
        break;
    }
};
document.getElementById('pacman').setAttribute('src','http://borkode.github.io/pacman/pacman-move.gif');
document.getElementById('pacman').style.width=pixel_size+'px';
document.getElementById('pacman').style.height=pixel_size+'px';
document.getElementById('pacman').style.position = 'absolute'
// Layout generation using array "layout"
var l = document.getElementById('layout')
l.setAttribute('width',pixel_size*gwid);
l.setAttribute('height',pixel_size*ghei);

var pman = document.getElementById('pacman');
setInterval(function(){

pman.style.left = pman.getBoundingClientRect().left+pixel_size*movex+'px';
pman.style.top = pman.getBoundingClientRect().top+pixel_size*movey+'px';
pacpos[0]=Math.floor(pman.getBoundingClientRect().left/pixel_size);
pacpos[1]=Math.floor(pman.getBoundingClientRect().top/pixel_size);
},250);
function stopMoving(){
movex = 0
movey = 0
return "Stopped Pacman from moving."
}


setInterval(function(){
  if(layout[retEl(pacpos[0],pacpos[1])]==1){
stopMoving();
    
pman.style.left = pman.getBoundingClientRect().left+pixel_size*movex*-1+'px';
pman.style.top = pman.getBoundingClientRect().top+pixel_size*movey*-1+'px';
  }
},1);
