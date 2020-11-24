const prompter2 = require('./modules/prompter2');
const makeAccount = require('./modules/makeAccount');

var loginResult;
var accountNumber;
async function start() {
	loginResult = await prompter2('login');

	if (loginResult === true) {
		console.log('Go Ahead');
	} else {
		console.log('Puk you');
	}

	accountNumber = await prompter2('accountNumber');
}

//Prompter Part Ends here

const apiAddress = 'https://api2.omnikick.com/api/v1/phone-signup';
var signUpEmail = 'testmailforblaster3@gmail.com';
var signUpSiteName = 'testmailforblaster.com';

async function makeAccountFunction() {
	await makeAccount.makeAccount(apiAddress, signUpEmail, signUpSiteName);
}

async function bossFunction() {
	await start();
	// SO now we have a number of Account to create, and a fake validation to stop people using it
	// without prior programing knowledge

	// console.log(accountNumber);

	//apiAddress, signUpEmail, signUpSiteName
	await makeAccountFunction();
}

bossFunction();