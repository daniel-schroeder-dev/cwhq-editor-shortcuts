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

	const filenameCSS = '.secondary-green.font-weight-moderate.text-body-2.py-4';
	const filenameDOMElement = document.querySelector(filenameCSS);
	const filename = filenameDOMElement.textContent.replaceAll(' ', '');

	let codeLines = Array.from(document.querySelectorAll('.CodeMirror-line > span'));

	let codeText = codeLines.reduce((acc, cur) => acc + cur.textContent + '\n', '');

	codeText = codeText.replace(/\n$/, '')
	let data = encodeURIComponent(codeText)
	data = data.replaceAll('%E2%80%8B', '');

	const API_DATA = `path=${filename}&data=${data}`;
	changeCaretColor();
	postData(API_URL, API_DATA)
		.then(data => {
    	console.log(data); // JSON data parsed by `data.json()` call
  	});
}

function changeCaretColor() {
	const GREEN = 'rgb(4, 154, 104)';
	const caretCSS = '.v-icon.notranslate.mdi.mdi-checkbox-blank-circle.theme--dark';
	const caretDOMElement = document.querySelector(caretCSS)
	caretDOMElement.style.color = GREEN;
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
