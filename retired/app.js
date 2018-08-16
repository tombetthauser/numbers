var timeVar = 100;
var container = document.getElementById("container");

codeHole();

function codeHole(){
	setTimeout(function(){
		randPrint();
		codeHole();
	}, randTimeOne());
}

function randTimeOne(){
	var randTimeTwo = Math.random() * timeVar;
	return randTimeTwo;
}

function randPrint(){
	var x = Math.round(Math.random() * 9);
	container.insertAdjacentHTML("afterbegin", x);
	var x = Math.random() * 10;
	if (x <= .5){
		container.insertAdjacentHTML("afterbegin", "<br>");
		x = Math.round(Math.random() * 9);
		container.insertAdjacentHTML("afterbegin", x);		
	} else if (x <= 1.5){
		container.insertAdjacentHTML("afterbegin", ".");
	}
}