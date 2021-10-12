"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initIpcMain = void 0;
var promises_1 = __importDefault(require("fs/promises"));
var path_1 = __importDefault(require("path"));
var os_1 = __importDefault(require("os"));
var mime_types_1 = __importDefault(require("mime-types"));
var electron_1 = require("electron");
var env_1 = require("./env");
var ipc_common_1 = require("../src-common/ipc-common");
var media_1 = require("../src-common/media");
var isErrnoException = function (obj) {
    return (obj instanceof Error);
};
var ipcMainApi = {
    inputFileData: function () { return __awaiter(void 0, void 0, void 0, function () {
        var inputFile, extension, mimeType, uint8arrayData, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    inputFile = (0, env_1.getInputFile)();
                    if (!inputFile) {
                        return [2 /*return*/, (0, ipc_common_1.ipcResultOk)(null)];
                    }
                    extension = path_1.default.extname(inputFile);
                    if (!media_1.SUPPORTED_EXTENSIONS_WITH_COMMA.includes(extension)) {
                        throw Error("input file extension is not supported " + extension);
                    }
                    mimeType = mime_types_1.default.lookup(extension);
                    if (!mimeType) {
                        throw Error("can not detect mime type of extension: " + extension);
                    }
                    _a = Uint8Array.bind;
                    return [4 /*yield*/, promises_1.default.readFile(inputFile)];
                case 1:
                    uint8arrayData = new (_a.apply(Uint8Array, [void 0, _b.sent()]))();
                    return [2 /*return*/, (0, ipc_common_1.ipcResultOk)({
                            data: uint8arrayData,
                            mime: mimeType,
                        })];
            }
        });
    }); },
    loadKeybindings: function () { return __awaiter(void 0, void 0, void 0, function () {
        var configDirPath, keybindingsFilePath, jsonStr, json, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    configDirPath = path_1.default.join(os_1.default.homedir(), '.config', 'kf-media-player');
                    // NOTE: Calling fsPromises.mkdir() when path is a directory that exists results in a rejection only when recursive is false.
                    promises_1.default.mkdir(configDirPath, { recursive: true });
                    keybindingsFilePath = path_1.default.join(configDirPath, 'keybindings.json');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, promises_1.default.readFile(keybindingsFilePath)];
                case 2:
                    jsonStr = (_a.sent()).toString();
                    json = JSON.parse(jsonStr);
                    return [2 /*return*/, (0, ipc_common_1.ipcResultOk)(json)];
                case 3:
                    e_1 = _a.sent();
                    if (isErrnoException(e_1) && (e_1 === null || e_1 === void 0 ? void 0 : e_1.code) === 'ENOENT') {
                        // if file does not exists, supress error and return null;
                        return [2 /*return*/, (0, ipc_common_1.ipcResultOk)(null)];
                    }
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
var initIpcMain = function () {
    ipc_common_1.IPC_CHANNELS.forEach(function (ipcChannel) {
        electron_1.ipcMain.handle(ipcChannel, function (_event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return __awaiter(void 0, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, ipcMainApi[ipcChannel].apply(ipcMainApi, args)];
                        case 1: 
                        // NOTE:
                        // this is type safe. because main process and renderer process are using same type definition of api;
                        return [2 /*return*/, _a.sent()];
                        case 2:
                            e_2 = _a.sent();
                            console.error(e_2);
                            return [2 /*return*/, (0, ipc_common_1.ipcResultErr)(e_2)];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        });
    });
};
exports.initIpcMain = initIpcMain;
//# sourceMappingURL=ipc-main.js.map