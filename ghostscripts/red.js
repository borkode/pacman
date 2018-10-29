// ghostscripts/red.js
// Blinky is the only ghost to target the player directly
var l = '/pacman/ghost_1.png'
var r = '/pacman/ghost_0.png'
var ghosts_el = document.getElementById('redghost')
ghosts_el.setAttribute('src',l);

setInterval(function(){
ghosts_el.style.postition = 'absolute';
	ghosts_el.style.left=pathc[0]+8*pixel_size
	ghosts_el.style.top=pathc[1]+8*pixel_size
},250);
setInterval(function(){
	var posx = (ghosts_el.style.left-8)/pixel_size
	var posy = (ghosts_el.style.left-8)/pixel_size
	var tox=pacpos[0]
	var toy=pacpos[1]
  easystar.findPath(posx, posy, tox, toy, function(path) {
	alert(path);
	if (path != null) {
var x=0;
		var pathc = [];
			pathc.push(path[1].x);
			pathc.push(path[1].y);
    return pathc
	}else{
  
  }
	
});
	easystar.calculate();	
},1);
