var timeVar = 100;
var timeImg = 100;
var r1 = 25;
var r2 = 10;
var container = document.getElementById("container");
var imageOne = document.getElementById("image");
var body = document.getElementById("body");
var baseSet = ""
var initPrintCount = Math.round(Math.random() * r1) + r2;
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
		container.insertAdjacentHTML("afterbegin", "c̷han̨g͠es ");		
	} else if (x === 10){
		container.insertAdjacentHTML("afterbegin", "e̢ve̷ryt̛h͘inǵ ͡");		
	} else if (x === 9){
		container.insertAdjacentHTML("afterbegin", "m̕ayb̛e ̧");		
	} else if (x === 8){
		container.insertAdjacentHTML("afterbegin", "a̴ll ́desire͟ ̴");		
	} else if (x === 7){
		container.insertAdjacentHTML("afterbegin", "don't͟ ̵k͡n̸o̡w͝");		
	} else if (x === 6){
		container.insertAdjacentHTML("afterbegin", "w҉atçh͝ ͢");		
	} else if (x === 5){
		container.insertAdjacentHTML("afterbegin", "l̴o͟o҉k ҉");		
	} else if (x === 4){
		container.insertAdjacentHTML("afterbegin", "y̴ǫu ");		
	} else if (x === 3){
		container.insertAdjacentHTML("afterbegin", "I͜ ̴");		
	} else if (x === 2){
		container.insertAdjacentHTML("afterbegin", "͟w̴e̡ ");		
	} else if (x === 1){
		container.insertAdjacentHTML("afterbegin", "un̶i͏versa̶l̢ ̷");		
	} else if (x === 0){
		container.insertAdjacentHTML("afterbegin", "sèek͠e͢r ");		
	}
	var x = Math.random();
	if (x <= .01){
		document.getElementById("container").innerHTML = "";
		initPrintCount = Math.round(Math.random() * r1) + r2;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
	}
	flipSet();
}

function initPrint(){
	var x = Math.round(Math.random() * 11);
	if (x === 11){
		container.insertAdjacentHTML("afterbegin", "c̷han̨g͠es ");		
	} else if (x === 10){
		container.insertAdjacentHTML("afterbegin", "e̢ve̷ryt̛h͘inǵ ͡");		
	} else if (x === 9){
		container.insertAdjacentHTML("afterbegin", "m̕ayb̛e ̧");		
	} else if (x === 8){
		container.insertAdjacentHTML("afterbegin", "a̴ll ́desire͟ ̴");		
	} else if (x === 7){
		container.insertAdjacentHTML("afterbegin", "don't͟ ̵k͡n̸o̡w͝");		
	} else if (x === 6){
		container.insertAdjacentHTML("afterbegin", "w҉atçh͝ ͢");		
	} else if (x === 5){
		container.insertAdjacentHTML("afterbegin", "l̴o͟o҉k ҉");		
	} else if (x === 4){
		container.insertAdjacentHTML("afterbegin", "y̴ǫu ");		
	} else if (x === 3){
		container.insertAdjacentHTML("afterbegin", "I͜ ̴");		
	} else if (x === 2){
		container.insertAdjacentHTML("afterbegin", "͟w̴e̡ ");		
	} else if (x === 1){
		container.insertAdjacentHTML("afterbegin", "un̶i͏versa̶l̢ ̷");		
	} else if (x === 0){
		container.insertAdjacentHTML("afterbegin", "sèek͠e͢r ");		
	}
}

function play() {
    var audio = document.getElementById('audio');
    // beep.play();
    if (audio.paused) {
        audio.play();
    }
	initPrintCount = Math.round(Math.random() * r1);
	for(i=0;i<initPrintCount;i++){
		initPrint();
	}
	x = Math.random();
	if (x <= .5){
		document.getElementById("container").innerHTML = ""; 
		initPrintCount = Math.round(Math.random() * r1) + r2;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
	}
	resetCounter += Math.round(Math.random() * 5)
	if (resetCounter >= 20){
		document.getElementById("container").innerHTML = "";
		initPrintCount = Math.round(Math.random() * r1) + r2;
		for(i=0;i<initPrintCount;i++){
			initPrint();
		}
		resetCounter = 0;
	}
   var elem = document.getElementById("body");
   req = elem.requestFullScreen || elem.webkitRequestFullScreen || elem.mozRequestFullScreen;
   req.call(elem);	
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
	var x = Math.round(Math.random()*250);
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
