const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');
const preload = path.join(__dirname, 'preload.js');
const windowEntryPoint = 'dist/index.html';
const configuration = {
	webPreferences: { preload },
	resizable: false,
	height: 350,
	width: 750,
	frame: false
};

const createWindow = () => {
	const mainWindow = new BrowserWindow(configuration);
	mainWindow.loadFile(windowEntryPoint).then(() => {});

	globalShortcut.register('CommandOrControl+R', () => mainWindow.reload());
	globalShortcut.register('Command+Option+J', () => mainWindow.openDevTools());
}

app.whenReady().then(() => {
	createWindow();

	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	});
});

app.on('window-all-closed', app.quit);

ipcMain.on('node', (event, message) => {
	if (typeof message === 'string') {
		if (message === 'closeApp') {
			const focusedWindow = BrowserWindow.getFocusedWindow();
			focusedWindow.close();
		}
	}
});
