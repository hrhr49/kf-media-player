const SUPPORTED_EXTENSIONS_WITH_COMMA = [
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

const SUPPORTED_EXTENSIONS_WITHOUT_COMMA =
  SUPPORTED_EXTENSIONS_WITH_COMMA
  .map((ext: string) => ext.slice(1));

export {
  SUPPORTED_EXTENSIONS_WITH_COMMA,
  SUPPORTED_EXTENSIONS_WITHOUT_COMMA,
};
