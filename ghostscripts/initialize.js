// /ghostscripts/initialize.js
var ghosts_el = [
document.getElementById('redghost'),
document.getElementById('orangeghost'),
document.getElementById('pinkghost'),
document.getElementById('blueghost')
]
var pixel_size = 25;
ghosts_el[0].setAttribute('width', pixel_size);
ghosts_el[0].setAttribute('height', pixel_size);
ghosts_el[1].setAttribute('width', pixel_size);
ghosts_el[1].setAttribute('height', pixel_size);
ghosts_el[2].setAttribute('width', pixel_size);
ghosts_el[2].setAttribute('height', pixel_size);
ghosts_el[3].setAttribute('width', pixel_size);
ghosts_el[3].setAttribute('height', pixel_size);

var ghosts_left  = ['ghost_1.png','ghost_3.png','ghost_5.png','ghost_7.png'];
var ghosts_right = ['ghost_0.png','ghost_2.png','ghost_4.png','ghost_6.png'];

ghosts_el[0].style.position='absolute';
ghosts_el[0].style.left='33px';
ghosts_el[0].style.top='33px';
