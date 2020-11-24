const prompts = require('prompts');

const login = [
	{
		type: 'text',
		name: 'username',
		message: 'Enter Username?',
	},
	{
		type: (prev) => (prev == 'dip' ? null : 'text'),
		name: 'password',
		message: 'Please enter password',
	},
];
const accountNumber = [
	{
		type: 'number',
		name: 'accountNumber',
		message: 'How many accounts do you wanna make?',
	},
];

async function askPromptFunction(param) {
	return new Promise(async (resolve, reject) => {
		if (param === 'login') {
			(async () => {
				const response = await prompts(login); //skipping this line
				// console.log(response, 'response');
				if (response.username === 'dip') {
					console.log('Logging in as Admin');
					resolve(true);
					return 0;
				} else if (response.password === '') {
					console.log('Please restart blaster and login with valid ID');
					reject(false);
					return 0;
				}
			})();
			// currently no auth activated, only dip is admin
		} else if (param === 'accountNumber') {
			while (true) {
				const response2 = await prompts(accountNumber);
				if (response2.accountNumber === '' || response2.accountNumber === 0) {
					console.log('Please enter ammount of number you wanna Blast');
					continue;
				} else if (response2.accountNumber > 0) {
					console.log('Nice choice!!');
					resolve(response2.accountNumber);
					return response2.accountNumber;
				}
			}
		}
		return 'failed';
	});
}

module.exports = askPromptFunction;
