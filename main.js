const {
	app,
	BrowserWindow
} = require('electron');

const defaultUrl = 'https://soundcloud.com';

function createWindow() {
	const win = new BrowserWindow({
		width: 1200,
		height: 800
	});

	win.loadFile('home.html');
}
