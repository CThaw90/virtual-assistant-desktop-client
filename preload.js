const { contextBridge, ipcRenderer } = require('electron');
const MAIN_API = 'api';

contextBridge.exposeInMainWorld(MAIN_API, {
    close: () => ipcRenderer.send('node', 'closeApp')
});
