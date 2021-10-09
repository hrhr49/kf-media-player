import fs from 'fs';
import path from 'path';

import mime from 'mime-types';
import {ipcMain} from 'electron';

import {getInputFile} from './env';

import {
  IPC_CHANNELS,
} from '../src-common/ipc-common';
import {
  SUPPORTED_EXTENSIONS_WITH_COMMA,
} from '../src-common/media';

import type {
  IpcApi,
  IpcChannel,
} from '../src-common/ipc-common';

const ipcMainApi: IpcApi = {
  inputFileData: async () => {
    const inputFile = getInputFile();
    if (!inputFile) {
      return null;
    }

    const extension = path.extname(inputFile);

    if (!SUPPORTED_EXTENSIONS_WITH_COMMA.includes(extension)) {
      throw Error(`input file extension is not supported ${extension}`);
    }
    const mimeType = mime.lookup(extension);
    if (!mimeType) {
      throw Error(`can not detect mime type of extension: ${extension}`);
    }

    const uint8arrayData = new Uint8Array(fs.readFileSync(inputFile));
    return {
      data: uint8arrayData,
      mime: mimeType,
    };
  },
};

const initIpcMain = () => {
  IPC_CHANNELS.forEach((ipcChannel: IpcChannel) => {
    ipcMain.handle(ipcChannel, (_event: Electron.IpcMainInvokeEvent, ...args: any[]) => {
      // NOTE:
      // this safe. because main process and renderer process are using same type definition of api;
      return (ipcMainApi[ipcChannel] as any)(...args);
    });
  });
}

export {
  initIpcMain,
};
