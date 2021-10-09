import {
  IPC_API_NAME,
  IPC_CHANNELS,
} from 'src-common/ipc-common';
import type {
  IpcApi,
  IpcChannel,
} from 'src-common/ipc-common';

const canUseIpcApi = () => IPC_API_NAME in window;

declare global {
  interface Window {
    ipcApi: IpcApi;
  }
}

const createDummyIpcRendererApi = (): IpcApi => {
  const ipcRendererApi: any = {};
  IPC_CHANNELS.forEach((ipcChannel: IpcChannel) => {
    ipcRendererApi[ipcChannel] = async (..._args: any[]) => {
      throw Error(`can not use IPC API : ${ipcChannel}`);
    }
  });
  return ipcRendererApi as IpcApi;
};

const ipcRendererApi: IpcApi = canUseIpcApi() ? window[IPC_API_NAME] : createDummyIpcRendererApi();

export {
  canUseIpcApi,
  ipcRendererApi,
};
