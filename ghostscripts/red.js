// ghostscripts/red.js
// Blinky is the only ghost to target the player directly
var l = '/pacman/ghost_1.png'
var r = '/pacman/ghost_0.png'
var ghosts_el = document.getElementById('redghost')
ghosts_el.setAttribute('src',l);

setInterval(function(){

},250);
setInterval(function(){
  easystar.findPath(posx, posy, tox, toy, function(path) {
	alert(path);
	if (path != null) {
var x=0;
		var pathc = [];
			pathc.push(path[1].x);
			pathc.push(path[1].y);
    return pathc
	}else{
  return [posx,posy]
  }
	
});
	easystar.calculate();	
},1);
