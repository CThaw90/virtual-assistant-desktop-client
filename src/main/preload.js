const { contextBridge, ipcRenderer } = require('electron');
const electron = require('electron');

contextBridge.exposeInMainWorld('api', {
    close: () => ipcRenderer.send('node', 'closeApp')
});
