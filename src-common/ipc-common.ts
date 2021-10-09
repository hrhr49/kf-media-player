const IPC_CHANNELS = [
  'inputFileData',
] as const;

const IPC_API_NAME = 'ipcApi';

type IpcChannelList = typeof IPC_CHANNELS;
type IpcChannel = IpcChannelList[number];

interface FileData {
  data: Uint8Array;
  mime: string;
}

interface _IpcApi {
  inputFileData: () => Promise<FileData | null>;
}

// NOTE:
// all api function should return promise to use
// same type defition in `ipcMain.handle()` and `ipcRenderer.invoke()`.
type IpcApi = {
  [K in IpcChannel]: _IpcApi[K];
} & Record<IpcChannel, (...args: any[]) => Promise<any>>;

export {
  IPC_API_NAME,
  IPC_CHANNELS,
};

export type {
  IpcApi,
  IpcChannel,
};
