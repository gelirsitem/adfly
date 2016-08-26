


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

var random_tm1 = getRandomInt(3000,4000);
var random_tm2 = getRandomInt(4000,5000);
var random_tm3 = getRandomInt(6000,9000);
var random_tm4 = getRandomInt(9000,10000);
var random_tm5 = getRandomInt(10000,13000);
var random_tm6 = getRandomInt(13000,16000);
var random_tm7 = getRandomInt(16000,18000);
var random_tm8 = getRandomInt(18000,20000);
function clickerf(){
document.elementFromPoint(window.innerWidth-145, 25).click();
	
}


setTimeout(clickerf,random_tm1);
setTimeout(clickerf,random_tm2);
setTimeout(clickerf,random_tm3);
setTimeout(clickerf,random_tm4);
setTimeout(clickerf,random_tm5);
setTimeout(clickerf,random_tm6);
setTimeout(clickerf,random_tm7);
setTimeout(clickerf,random_tm8);
