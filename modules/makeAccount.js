const axios = require('axios').default;

// https://api2.omnikick.com/api/v1/phone-signup
// https://devapi.omnikick.com/api/v1/phone-signup

// contactSize: "0 to  100 subscribers"
// email: "dipbd00@gmail.com"
// firstName: "Dip"
// fromShopify: false
// lastName: "Chowdhury"
// password: "123456"
// phoneNumber: "01685117737"
// planId: "phone-signup"
// sendPromotion: false
// shopifySite: ""
// site: "google1.com"
// syncInt: 0

signUpObject = {
	contactSize: '0 to  100 subscribers',
	email: '', // this needed to be added everytime
	firstName: 'Dip',
	fromShopify: false,
	lastName: 'Chowdhury',
	password: '123456',
	phoneNumber: '01685117737',
	planId: 'phone-signup',
	sendPromotion: false,
	shopifySite: '',
	site: '', // this sneeded to be added everytime
	syncInt: 0,
};

async function makeAccount(apiAddress, signUpEmail, signUpSiteName) {
	signUpObject.email = signUpEmail;
	signUpObject.site = signUpSiteName;

	await axios
		.post(apiAddress, signUpObject)
		.then((response) => {
            console.log('======================')
            console.log('======================')
            console.log('======================')
            console.log(response.data);
            console.log('======================')
            console.log(response.status);
            console.log('======================')
            console.log('======================')
            console.log('======================')
		})
		.catch((error) => {
			if (error.response) {
				// The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("ERROR RESPONSE")
                console.log("ERROR RESPONSE")
				console.log(error.response.data);
				console.log(error.response.status);
                console.log(error.response.headers);
                console.log("ERROR RESPONSE ENDS")
                console.log("ERROR RESPONSE ENDS")
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log("ERROR REQUEST");
                console.log("ERROR REQUEST");
                console.log(error.request);
                console.log("ERROR REQUEST ENDS");
                console.log("ERROR REQUEST ENDS");
			} else {
                // Something happened in setting up the request that triggered an Error
                console.log("ERROR MESSAGE")
                console.log("ERROR MESSAGE")
                console.log("Error", error.message);
                console.log("ERROR MESSAGE ENDS")
                console.log("ERROR MESSAGE ENDS")
            }
            console.log("ERROR CONFIG")
            console.log("ERROR CONFIG")
            console.log(error.config);
            console.log("ERROR CONFIG ENDS")
            console.log("ERROR CONFIG ENDS")
		});
}

module.exports = {
	makeAccount,
};
