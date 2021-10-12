"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipcResultErr = exports.ipcResultOk = exports.IPC_CHANNELS = exports.IPC_API_NAME = void 0;
var ipcResultOk = function (data) { return ({ isOk: true, data: data }); };
exports.ipcResultOk = ipcResultOk;
var ipcResultErr = function (err) {
    if (err instanceof Error) {
        return { isOk: false, err: err };
    }
    else {
        return { isOk: false, err: new Error(String(err)) };
    }
};
exports.ipcResultErr = ipcResultErr;
var IPC_CHANNELS = [
    'inputFileData',
    'loadKeybindings',
];
exports.IPC_CHANNELS = IPC_CHANNELS;
var IPC_API_NAME = 'ipcApi';
exports.IPC_API_NAME = IPC_API_NAME;
//# sourceMappingURL=ipc-common.js.map