var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

// generate new claims
var claim6 = new claim('Bob Jones', 'Specialist', 440);
var claim7 = new claim('Scarf Grommet', 'Emergency', 2000);
var claim8 = new claim('Docent Brimsby', 'Optical', 300);
var claim9 = new claim('Jeff Scorchboard', 'Primary Care', 2500);
var claim10 = new claim('Eleanor Burnston', 'Primary Care', 2000);

var initialList = [claim1, claim2, claim3, claim4, claim5];

// add new claims to array
initialList.push(claim6, claim7, claim8, claim9, claim10);

var totalPayedOut = 0;

for (var it = 0; it < initialList.length; it++){
	calcAmountCovered(initialList[it]);
}

console.log('Total amount payed out: $' + totalPayedOut);


// hard mode
$(document).ready(function(){
	// display initial claims
	var claimText = '';
	for(var jt = 0; jt < initialList.length; jt++){
		var pName = initialList[jt].patientName;
		var vType = initialList[jt].visitType;
		var amount = '$' + initialList[jt].visitCost.toLocaleString();

		claimText += '<tr><td>' + pName + '</td><td>' + vType + '</td><td>' + amount + '</td></tr>';
	}
	$('.display-claims').append(claimText);

	console.log('claims', claimText);
});

//function to determine percent covered
function calcPercentCovered(claim){
	// pull variable value out of object for processing
	var visitType = claim.visitType;

	// initialize percentCovered, to be generated based on visit type and then returned
	var percentCovered = 0.0;

	// generate percentCovered based on visit type
	switch(visitType){
		case "Optical":
			percentCovered = 0.0;
			break;
		case "Specialist":
			percentCovered = 0.1;
			break;
		case "Primary Care":
			percentCovered = 0.5;
			break;
		case "Emergency":
			percentCovered = 1.0;
			break;
		default:
			alert("Visit Type not recognized");
		}

		return percentCovered;
}

//function to determine amount covered
function calcAmountCovered(claim){
	var name = claim.patientName;
	var visitCost = claim.visitCost;
	var percent = calcPercentCovered(claim);

	var amountCovered = visitCost * percent;

	totalPayedOut += amountCovered;

	console.log('Paid out $' + amountCovered + ' for ' + name);
}

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}
