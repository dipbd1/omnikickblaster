// Greetings
var prompt = require('prompt');

var schema = {
	properties: {
		Username: {
			pattern: /^[a-zA-Z\s\-]+$/,
			message: 'Name must be only letters, spaces, or dashes',
			required: true,
		},
		Password: {
			hidden: true,
		},
	},
};

prompt.message = '';
prompt.delimiters = '';

const askPrompt = ()=>{
	return new Promise(async (resolve, reject) => {
		prompt.start();
		prompt.get(schema, async (err, result) => {
			if (result.Username === 'dip' && result.Password === '123456') {
				console.log('Everything all right, you may proceed now');
			} else {
				console.log('Wrong Username/Password');
				reject(false);
			}
			console.log('Starting DDOS MODULE');
			await new Promise((resolve) => {
				setTimeout(() => {
					console.log('DDOS MODULE LOADED');
					resolve();
				}, 3000);
			});
			resolve(true);
		});
	});
} 

module.exports = askPrompt