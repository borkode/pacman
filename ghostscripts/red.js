// ghostscripts/red.js
// Blinky is the only ghost to target the player directly
var l = '/pacman/ghost_1.png'
var r = '/pacman/ghost_0.png'
var ghosts_el = document.getElementById('redghost')
ghosts_el.setAttribute('src',l);
var pathe = [];
setInterval(function(){
document.getElementById('redghost').style.postition = 'absolute';
var posx = (document.getElementById('redghost').getBoundingClientRect().left-8)/pixel_size;var posy = (document.getElementById('redghost').getBoundingClientRect().left-8)/pixel_size;var tox=pacpos[0];var toy=pacpos[1];
pathe=easystar.findPath(posx, posy, tox, toy, function(path) {if (path != null) {console.log(path);var z=0;var pathc = [path[1].x,path[1].y];}else{pathc= [posx,posy];};return pathc;});
	easystar.calculate();
	console.log(pathe)
	document.getElementById('redghost').style.left=pathe[0]*pixel_size+8;document.getElementById('redghost').style.top=pathe[1]*pixel_size+8;
},250);
