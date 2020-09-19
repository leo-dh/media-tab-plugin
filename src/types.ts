export enum MessageType {
  POPUP,
  GET_CUR_TAB,
  GO_TO_PIN_TAB,
  GO_TO_PLAYING_TAB,
  PLAY_PAUSE,
  CHECK_VIDEO_STATUS,
  SET_VIDEO_STATUS,
  TOAST_SUCCESS,
  TOAST_FAILURE,
}

export interface Message {
  type: MessageType;
  text?: string;
}

export interface Page {
  url: string;
  title: string;
}

export type Tab = browser.tabs.Tab;
