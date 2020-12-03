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
	console.log('Saving boss...');
}
