var timeVar = 100;
var timeImg = 100;
var container = document.getElementById("container");
var imageOne = document.getElementById("image");
var body = document.getElementById("body");
var baseSet = ""
var initPrintCount = Math.round(Math.random() * 200) + 200;
var beep = new Audio('beep2.wav');
var resetCounter = 0


for(i=0;i<initPrintCount;i++){
	initPrint();
}

baseSet = (document.getElementById("container").innerHTML); 

codeHole();
imageHide();

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;
   if (key == 13) {
       var elem = document.getElementById("body");
	   req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
	   req.call(elem);	
   }
}

function codeHole(){
	setTimeout(function(){
		randPrint();
		codeHole();
	}, randTimeOne());
}

function randTimeOne(){
	var t = Math.random() * timeVar;
	return t;
}

function randTimeTwo(){
	var t = Math.random() * timeImg;
	return t;
}

function randPrint(){
	var x = Math.round(Math.random() * 11);
	if (x === 11){
		container.insertAdjacentHTML("afterbegin", "|");		
	} else if (x === 10){
		container.insertAdjacentHTML("afterbegin", "/");		
	} else if (x === 9){
		container.insertAdjacentHTML("afterbegin", "\\");		
	} else if (x === 8){
		container.insertAdjacentHTML("afterbegin", "%");		
	} else if (x === 7){
		container.insertAdjacentHTML("afterbegin", ">");		
	} else if (x === 6){
		container.insertAdjacentHTML("afterbegin", "<");		
	} else if (x === 5){
		container.insertAdjacentHTML("afterbegin", "&");		
	} else if (x === 4){
		container.insertAdjacentHTML("afterbegin", "$");		
	} else if (x === 3){
		container.insertAdjacentHTML("afterbegin", "̝7͓͉̥̙͉̮̩");		
	} else if (x === 2){
		container.insertAdjacentHTML("afterbegin", "͟8̺̗̰̰͕̟");		
	} else if (x === 1){
		container.insertAdjacentHTML("afterbegin", "9҉");		
	} else if (x === 0){
		container.insertAdjacentHTML("afterbegin", "0̮̱");		
	}
	var x = Math.random();
	if (x <= .01){
		document.getElementById("container").innerHTML = "";
		initPrintCount = Math.round(Math.random() * 1500) + 1500;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
	}
	flipSet();
}

function initPrint(){
	var x = Math.round(Math.random() * 11);
	if (x === 11){
		container.insertAdjacentHTML("afterbegin", "|");		
	} else if (x === 10){
		container.insertAdjacentHTML("afterbegin", "/");		
	} else if (x === 9){
		container.insertAdjacentHTML("afterbegin", "\\");		
	} else if (x === 8){
		container.insertAdjacentHTML("afterbegin", "%");		
	} else if (x === 7){
		container.insertAdjacentHTML("afterbegin", ">");		
	} else if (x === 6){
		container.insertAdjacentHTML("afterbegin", "<");		
	} else if (x === 5){
		container.insertAdjacentHTML("afterbegin", "&");		
	} else if (x === 4){
		container.insertAdjacentHTML("afterbegin", "$");		
	} else if (x === 3){
		container.insertAdjacentHTML("afterbegin", "̝7͓͉̥̙͉̮̩");		
	} else if (x === 2){
		container.insertAdjacentHTML("afterbegin", "͟8̺̗̰̰͕̟");		
	} else if (x === 1){
		container.insertAdjacentHTML("afterbegin", "9҉");		
	} else if (x === 0){
		container.insertAdjacentHTML("afterbegin", "0̮̱");		
	}
}

function play() {
    var audio = document.getElementById('audio');
    // beep.play();
    if (audio.paused) {
        audio.play();
    }
	initPrintCount = Math.round(Math.random() * 200);
	for(i=0;i<initPrintCount;i++){
		initPrint();
	}
	x = Math.random();
	if (x <= .5){
		document.getElementById("container").innerHTML = ""; 
		initPrintCount = Math.round(Math.random() * 200) + 200;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
	}
	resetCounter += Math.round(Math.random() * 5)
	if (resetCounter >= 20){
		document.getElementById("container").innerHTML = "";
		initPrintCount = Math.round(Math.random() * 200) + 200;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
		resetCounter = 0;
	}
}

function imgDis() {
	document.getElementById("image").src="";
}

function imageHide(){
	// document.getElementById('image').style.marginLeft = "10px";
	setTimeout(function(){
		document.getElementById('image').style.marginLeft = (Math.random() * 10) + 10 + "px";
		// document.getElementById("image").src="";
		// document.getElementById("image").src="";
		imageHide();
	}, randTimeTwo());
}

function flipSet() {
	var t = Math.random()*500;
	var x = Math.round(Math.random()*1000);
	if (x === 3){
		image.setAttribute("class", "flip");
		setInterval(function(){
			image.setAttribute("class", "");
		}, t);
	} 
	else if (x === 2){
		container.setAttribute("class", "flip");
		setInterval(function(){
			container.setAttribute("class", "");
		}, t);
	} 
	else if (x === 1){
		body.setAttribute("class", "flip");
		setInterval(function(){
			body.setAttribute("class", "");
		}, t);
	}
}
