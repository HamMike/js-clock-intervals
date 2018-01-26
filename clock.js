

var degreesSec = 0;
var degreesMin = 0;
var degreesHour = 0;
var elSecond = document.getElementById("second");
var elMinute = document.getElementById("minute");
var elHour = document.getElementById("hour");

setInterval(function() {
	degreesSec = degreesSec + 6;
	elSecond.style.transform = "rotate(" + degreesSec + "deg)";
	
}, 1000);


 setInterval(function() {
 	degreesMin = degreesMin + 6;
	elMinute.style.transform = "rotate(" + degreesMin + "deg)";
	
}, 60000);

setInterval(function() {
	degreesHour = degreesHour + 30;
	elHour.style.transform = "rotate(" + degreesHour + "deg)";
}, 3.6e+6);