
/**
 * Get a random integer between `min` and `max`.
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var random_tm = getRandomInt(3000,4000);
function clickerf(){
	var element = document.getElementById("skip_button");
	if ("click" in element){
				element.click();
	}else if ("dispatchEvent" in element) {
		
		var evt = document.createEvent("MouseEvents");
		evt.initMouseEvent("click", true, true, window,0, 0, 0, 0, 0, false, false, false, false, 0, null);
		element.dispatchEvent(evt);
	}
	
}


setTimeout(clickerf,random_tm);
