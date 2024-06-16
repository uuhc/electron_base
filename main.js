const {
	BrowserWindow,
	app
} = require('electron')

const path = require('path')

let mainWindows = null;
const createWindows = () => {
	mainWindows = new BrowserWindow({
		width: 400,
		height: 300,
		alwaysOnTop: true,
		x: 1500,
		y: 1000
	})
	mainWindows.loadFile(path.resolve(__dirname, 'test.html'))
	// mainWindows.webContents.openDevTools()
}

app.whenReady().then(() => {
	createWindows()
})