"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var ipc_common_1 = require("../src-common/ipc-common");
var initIpcRenderer = function () {
    // NOTE:
    // this is type safe. because main process and renderer process are using same type definition of api;
    var ipcRendererApi = {};
    ipc_common_1.IPC_CHANNELS.forEach(function (ipcChannel) {
        ipcRendererApi[ipcChannel] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return electron_1.ipcRenderer.invoke.apply(electron_1.ipcRenderer, __spreadArray([ipcChannel], args, false));
        };
    });
    return ipcRendererApi;
};
var ipcRendererApi = initIpcRenderer();
electron_1.contextBridge.exposeInMainWorld(ipc_common_1.IPC_API_NAME, ipcRendererApi);
//# sourceMappingURL=preload.js.map