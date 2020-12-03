/*
 *	I want to be able to save when I press alt-s
*/

let ALT_KEY_PRESSED = false;
let S_KEY_PRESSED = false;

document.body.addEventListener('keydown', e => {
	if (e.key == 'Alt') {
		ALT_KEY_PRESSED = true;
	}
	if (e.key == 's') {
		S_KEY_PRESSED = true;
	}

	// how could i tell if ALT and S are pressed?
	if (ALT_KEY_PRESSED && S_KEY_PRESSED) {
		save();
	}

});

document.body.addEventListener('keyup', e => {
	if (e.key == 'Alt') {
		ALT_KEY_PRESSED = false;
	}
	if (e.key == 's') {
		S_KEY_PRESSED = false;
	}
});

function save() {
	const API_URL = 'https://danielj.codewizardshq.com/edit/api/set/';
	const API_DATA = 'path=foo.txt&data=Django%0A';
	console.log('Saving boss...');
	postData(API_URL, API_DATA)
		.then(data => {
    	console.log(data); // JSON data parsed by `data.json()` call
  	});
}


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
