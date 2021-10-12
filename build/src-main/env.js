"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInputFile = exports.getInputFile = exports.isDev = void 0;
var electron_is_dev_1 = __importDefault(require("electron-is-dev"));
exports.isDev = electron_is_dev_1.default;
// isDev = true -> ['../electron', '.',  ...]
// isDev = false -> ['my-app',  ...]
var argv = electron_is_dev_1.default ? process.argv.slice(2) : process.argv.slice(1);
var inputFile;
if (argv.length === 0) {
    inputFile = null;
}
else {
    inputFile = argv.slice(-1)[0];
}
var getInputFile = function () { return inputFile; };
exports.getInputFile = getInputFile;
var setInputFile = function (filePath) {
    inputFile = filePath;
};
exports.setInputFile = setInputFile;
//# sourceMappingURL=env.js.map