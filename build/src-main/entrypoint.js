"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var electron_1 = require("electron");
var env_1 = require("./env");
var env_2 = require("./env");
var ipc_main_1 = require("./ipc-main");
function createWindow() {
    var mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 450,
        titleBarStyle: 'customButtonsOnHover',
        frame: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path_1.default.join(__dirname, 'preload.js'),
        }
    });
    // mainWindow.loadFile('index.html')
    mainWindow.loadURL(env_1.isDev
        ? 'http://localhost:3000'
        : "file:///" + __dirname + "/../index.html");
    if (env_1.isDev) {
        // mainWindow.webContents.openDevTools();
        require('electron-reload')(__dirname, {
            electron: path_1.default.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
            forceHardReset: true,
            hardResetMethod: 'exit',
        });
    }
}
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('open-file', function (event, path) {
    event.preventDefault();
    (0, env_2.setInputFile)(path);
});
(0, ipc_main_1.initIpcMain)();
//# sourceMappingURL=entrypoint.js.map