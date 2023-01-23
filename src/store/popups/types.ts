export interface IPopupState {
  isOpenPopup: boolean;
  popupOptions: IPopupOptions | null;
}

export interface IPopupOptions {
  x: number;
  y: number;
  eventId: string; 
}