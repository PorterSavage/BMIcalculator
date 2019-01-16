var weight = parseInt(prompt("Enter your weight, using lbs:"));
var height = parseInt(prompt("Enter your height in inches:"));

var bmi = function(one, two){
	return weight / (height* height) * 703
}

var result = bmi(weight, height);
alert(result);
