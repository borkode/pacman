// ghostscripts/red.js
// Blinky is the only ghost to target the player directly
var l = '/pacman/ghost_1.png'
var r = '/pacman/ghost_0.png'
var ghosts_el = document.getElementById('redghost')
ghosts_el.setAttribute('src',l);


setInterval(function(){
	var posx = (document.getElementById('redghost').getBoundingClientRect().left-8)/pixel_size
	var posy = (document.getElementById('redghost').getBoundingClientRect().left-8)/pixel_size
	var tox=pacpos[0]
	var toy=pacpos[1]
  easystar.findPath(posx, posy, tox, toy, function(path) {
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

setInterval(function(){
document.getElementById('redghost').style.postition = 'absolute';
	document.getElementById('redghost').style.left=pathc[0]*pixel_size+8
	document.getElementById('redghost').style.top=pathc[1]*pixel_size+8
},250);
