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

var claim6 = new claim('Bob Jones', 'Specialist', 440);
var claim7 = new claim('Scarf Grommet', 'Emergency', 2000);
var claim8 = new claim('Docent Brimsby', 'Optical', 300);
var claim9 = new claim('Jeff Scorchboard', 'Primary Care', 2500);
var claim10 = new claim('Eleanor Burnston', 'Primary Care', 2000);

var initialList = [claim1, claim2, claim3, claim4, claim5];

initialList.push(claim6, claim7, claim8, claim9, claim10);

console.log(initialList);

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered

//function to determine amount covered
