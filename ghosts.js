// ghosts.js
var ghosts_left  = ['ghost_1.png','ghost_3.png','ghost_5.png','ghost_7.png'];
var ghosts_right = ['ghost_0.png','ghost_2.png','ghost_4.png','ghost_6.png'];
var ghost_colors = ['red','orange','pink','blue'];
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
var ghosts_el = [
document.getElementById('redghost'),
document.getElementById('orangeghost'),
document.getElementById('pinkghost'),
document.getElementById('blueghost')
]
ghosts_el[0].setAttribute('src', ghosts_left[0]);
ghosts_el[1].setAttribute('src', ghosts_left[1]);
ghosts_el[2].setAttribute('src', ghosts_left[2]);
ghosts_el[3].setAttribute('src', ghosts_left[3]);

ghosts_el[0].setAttribute('width', pixel_size);
ghosts_el[0].setAttribute('height', pixel_size);
ghosts_el[1].setAttribute('width', pixel_size);
ghosts_el[1].setAttribute('height', pixel_size);
ghosts_el[2].setAttribute('width', pixel_size);
ghosts_el[2].setAttribute('height', pixel_size);
ghosts_el[3].setAttribute('width', pixel_size);
ghosts_el[3].setAttribute('height', pixel_size);