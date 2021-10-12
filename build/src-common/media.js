"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPORTED_EXTENSIONS_WITHOUT_COMMA = exports.SUPPORTED_EXTENSIONS_WITH_COMMA = void 0;
var SUPPORTED_EXTENSIONS_WITH_COMMA = [
    '.3gp',
    '.avi',
    '.mov',
    '.mp4',
    '.m4v',
    '.m4a',
    '.mp3',
    '.mkv',
    '.ogv',
    // NOTE: mime-types can not detect ogm MIME type video/ogg ?
    // '.ogm',
    '.ogg',
    '.oga',
    '.webm',
    '.wav',
];
exports.SUPPORTED_EXTENSIONS_WITH_COMMA = SUPPORTED_EXTENSIONS_WITH_COMMA;
var SUPPORTED_EXTENSIONS_WITHOUT_COMMA = SUPPORTED_EXTENSIONS_WITH_COMMA
    .map(function (ext) { return ext.slice(1); });
exports.SUPPORTED_EXTENSIONS_WITHOUT_COMMA = SUPPORTED_EXTENSIONS_WITHOUT_COMMA;
//# sourceMappingURL=media.js.map