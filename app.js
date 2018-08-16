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
	// var x = Math.round(Math.random() * 10);
	// if (x <= .01) {
	// 	container.insertAdjacentHTML("afterbegin", "<br>");
	// }
}


// T̝̳̝͙͍̣o͔̟̟͉̭͚ ̵̰͕̹̦͕͔̟i̷̝͈̯ǹ͚̼̗̬̠̖v̠͙̲͙̟̰o͎ḳ̮e̗͈̱̬͟ ̬͎̝t̘͈̜̹̫̦͞h̢͚͙͎̲͓e̶̙͙̲ ̖̲̬̫̙̠̹́h̵i͉͎͓̼̱v̜̙͈̰e͈̯͉̗̪-̰̗̟̳m͚̹͝i͔͚̦̹̳n͖̜̺̻d͕͕̖̯̲͎̯ ͟r̜̣̤̟̘e̩̩͈̬̟̠͙p̶͇̻̤̪̹r̭̦̹e͓̤s̬̼͕͉̜̘e͏̱̦n͎t͏̦͖͉̮̺̟i̙͠n͕̭̰̭͉͖͞g̩͔̖̤͕̤̭͜ c͙̠̰̟̰h̛̙̱͍͙a̷͙͚̜̹o̦̦͔ş͓̠̺͙.
// ̬͇I̠n̖̰͈̹̣v̦̜o̗̲ķ͙͇͕̯̘i̘͇ͅn̨̟g͇͚̖̀ ̭t͏͎̼he̶̙̖͕̖̞̤̜ ͙͓̗͈͈̻̭͡f̧̬̺̠͎̙̳̳e̹͉̤̹̻͍̯e̺̥͕͙͕̜l̝̫͖i̦͈̲̮̣̖͠ng̬̹̺̘̹͚̀ ̣́o̶͎f̡͎͉͇ ͇̫͎̭͖̩̝́c̝̹̜̼̟͜ͅha̻͓͔̗ͅo͠s̥͕.͈̠͔̯̝
// ̖̘̘̞͠W̴̩i̞̳̱̺t̮͢h̷ ̬̤o̺͓̮̦u̙t ͉̻̜͟o̪̜̻͔̮͚r͓͔͈̣̺̯̻d̩̬͎̪͞e̼r̸̩̹̞̞̦.̷̬͈͎̦̰̦̖
// ̱̖̼͕̺T̥͙he̖͓̹̟̜͞ N͙͔͍̤̮̼̗͠e͙z̭p̣̜̝̹͢ͅe̴͖̰̖̞̹̗̩r̝͚̖d͍̼i̳̫̝a̼̘̹̜̼͓̲n̜̖̥̹̰̻̙ ̥̙h̳̬i̙̫͎͉͖͓͍͟v̠̥̫̝̬̰e̺̳͢-͢m̫̱̼̙̺̩̼i̢̲̣̞n̘͓͕͇̞̲̩͝d̴̖̯̫ ̡͉o̦͜f͉̟̬͟ ͕̻̰̰͚̼̀c̡̩͎͉̝͈h̥͖̗͈̺a̷̼̟͇͉o̖̰̠̺̙͈s̱͙.̨̱̟̫̳̯̝̺ ̰͙̲̦͍̻̖Z͓͠a̧̭l̴g̶͖̤͕̱͔o̖͍̭̹̖.҉͙͉̰
// ̙̙̦̜̮͡H̲͇̼e̺͓͟ ̦̩w̷h̬͍̯͝o̞̪̭ͅ ͘W̻a͈͘i̴͔t͕̖̮͜ͅs͢ ̺̀B̲̻̖͚͖͙̱e̝̬͙̟̯h̦͉̦͘i̞͉̖̫̰n̶̠̯d̟̩̱ ̸T̢͉͕̠̹ḥ͢e̦̠ ̞̖̬̹̰͙W̱̩̣̦̯̮̫a̱̙͎͔̪̙̰ḷ̵l̴͎͖̩.
// ̼Z̝͕̩A̬͎̦̯Ļ͖̣̬̖G̤O̱̼̗̬̙͠!̨͚̗̰͍̲̙